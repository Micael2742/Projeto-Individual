document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gbif]').forEach((panel) => {
    const results = panel.querySelector('[data-gbif-results]');
    const status = panel.querySelector('[data-gbif-status]');
    const reloadButton = panel.querySelector('[data-gbif-reload]');
    const taxonKey = panel.dataset.taxonKey;

    if (!results || !status || !reloadButton || !taxonKey) {
      console.error('Painel GBIF sem os elementos ou dados de configuração necessários.', panel);
      return;
    }

    const loadObservations = async () => {
      status.textContent = 'Carregando registros do GBIF...';
      results.replaceChildren();
      reloadButton.disabled = true;

      try {
        const params = new URLSearchParams({
          taxonKey,
          hasCoordinate: 'true',
          occurrenceStatus: 'PRESENT',
          limit: '30'
        });
        if (panel.dataset.country) params.set('country', panel.dataset.country);

        const response = await fetch(`https://api.gbif.org/v1/occurrence/search?${params}`);x
        if (!response.ok) {
          throw new Error(`GBIF respondeu com status ${response.status}.`);
        }

        const data = await response.json();
        if (!Array.isArray(data.results)) {
          throw new Error('A resposta do GBIF nao contem uma lista de registros.');
        }

        const uniqueSpecies = panel.dataset.uniqueSpecies !== 'false';
        const observations = [];
        const seenSpecies = new Set();

        for (const record of data.results) {
          const scientificName = record.species || record.scientificName;
          if (!scientificName) continue;
          if (uniqueSpecies && seenSpecies.has(scientificName.toLowerCase())) continue;

          seenSpecies.add(scientificName.toLowerCase());
          observations.push(record);
          if (observations.length === 6) break;
        }

        if (observations.length === 0) {
          status.textContent = 'Nenhum registro com localizacao foi encontrado neste momento.';
          return;
        }

        const cards = observations.map((record) => {
          const card = document.createElement('article');
          card.className = 'mini-card gbif-card';

          const species = document.createElement('h4');
          species.textContent = record.species || record.scientificName;

          const location = [record.locality, record.stateProvince, record.country]
            .filter((value, index, values) => value && values.indexOf(value) === index)
            .join(', ');
          const locationText = document.createElement('p');
          locationText.textContent = `Local: ${location || 'nao informado'}`;

          const year = record.year || (record.eventDate && record.eventDate.match(/\b\d{4}\b/)?.[0]);
          const dateText = document.createElement('p');
          dateText.textContent = `Ano: ${year || 'nao informado'}`;

          const recordLink = document.createElement('a');
          recordLink.href = `https://www.gbif.org/occurrence/${encodeURIComponent(record.key)}`;
          recordLink.target = '_blank';
          recordLink.rel = 'noopener noreferrer';
          recordLink.textContent = 'Ver registro no GBIF';
          recordLink.setAttribute('aria-label', `Ver registro de ${species.textContent} no GBIF`);

          card.append(species, locationText, dateText, recordLink);
          return card;
        });

        results.replaceChildren(...cards);
        status.textContent = uniqueSpecies
          ? `${cards.length} especies com registros de ocorrencia.`
          : `${cards.length} registros de ocorrencia.`;
      } catch (error) {
        console.error('Nao foi possivel carregar os registros do GBIF:', error);
        status.textContent = 'Nao foi possivel carregar os registros agora. Verifique sua conexao e tente novamente.';
      } finally {
        reloadButton.disabled = false;
      }
    };

    reloadButton.addEventListener('click', loadObservations);
    loadObservations();
  });
});
