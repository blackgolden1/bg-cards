# Guía de uso: GitHub MCP

## Configuración completada

El servidor MCP de GitHub está configurado en `.mcp.json` y funciona con el token almacenado en `.env`.

## Herramientas disponibles (29)

### Repositorios
- `search_repositories` — Buscar repositorios en GitHub.
- `create_repository` — Crear un nuevo repositorio.
- `fork_repository` — Fork de un repositorio.

### Archivos
- `get_file_contents` — Leer contenido de archivos o directorios.
- `create_or_update_file` — Crear o actualizar un archivo.
- `push_files` — Subir múltiples archivos en un solo commit.

### Issues
- `create_issue` — Crear un issue.
- `list_issues` — Listar issues.
- `get_issue` — Ver detalle de un issue.
- `update_issue` — Actualizar un issue.
- `add_issue_comment` — Agregar comentario a un issue.
- `search_issues` — Buscar issues/PRs.

### Pull requests
- `create_pull_request` — Crear un PR.
- `list_pull_requests` — Listar PRs.
- `get_pull_request` — Ver detalle de un PR.
- `create_pull_request_review` — Crear una review.
- `merge_pull_request` — Mergear un PR.
- `get_pull_request_files` — Archivos cambiados en un PR.
- `get_pull_request_status` — Estado de checks.
- `update_pull_request_branch` — Actualizar rama del PR.
- `get_pull_request_comments` — Comentarios de review.
- `get_pull_request_reviews` — Reviews del PR.

### Ramas y commits
- `create_branch` — Crear rama.
- `list_commits` — Listar commits.

### Búsquedas
- `search_code` — Buscar código.
- `search_users` — Buscar usuarios.

## Ejemplos de uso en Claude Code

```txt
@github listá los issues abiertos en blackgolden1/bg-cards
```

```txt
@github creá un issue en blackgolden1/bg-cards con título "Mejorar accesibilidad" y descripción "Revisar contraste y etiquetas ARIA"
```

```txt
@github mostrame los pull requests abiertos de blackgolden1/bg-cards
```

```txt
@github leé el archivo README.md de blackgolden1/bg-cards en la rama main
```

```txt
@github creá una rama feature/test-mcp desde main en blackgolden1/bg-cards
```

## Seguridad

- El token nunca se expone en `.mcp.json` ni en el código.
- Se carga desde `.env` mediante `scripts/start-mcp-github.sh`.
- `.env` está excluido en `.gitignore`.
- Si el token se ve comprometido, revocalo desde GitHub inmediatamente.
