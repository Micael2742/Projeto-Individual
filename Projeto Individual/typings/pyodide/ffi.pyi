from collections.abc import Callable
from typing import Any


def create_proxy(callback: Callable[..., Any]) -> Any: ...
