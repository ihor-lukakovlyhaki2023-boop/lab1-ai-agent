# Лабораторна робота №1: Проєктування AI-агента для автоматизації розробки та CI/CD

- **Виконав:** Ковлига Ігор Олегович
- **Група:** КІ-405 (Шифр: 405CSAD9)
- **Варіант:** 3 (JavaScript, npm scripts, Jest)

## Короткий опис проєкту
Кросплатформний проєкт Hello World із модульним тестуванням на Jest, скриптами автоматизації збірки (`scripts/ci.bat`, `scripts/ci.sh`) та матричним конвеєром GitHub Actions (Ubuntu, Windows, macOS).

## AI-агент Build Engineer
- **Маніфест агента:** `.github/agents/build-engineer.agent.md`
- **Skills:** `project-scaffold`, `build-and-test`, `github-actions` (у `.github/skills/`)
- **Commands & Orchestrator:** у `.github/prompts/` (запуск через `init.prompt.md`)
- **Архітектура:** детальний опис у `docs/architecture.md`
- **Інструкція запуску:** у `docs/usage.md`

## Локальна перевірка
```bash
# Windows
.\scripts\ci.bat

# Linux / macOS
chmod +x scripts/ci.sh
./scripts/ci.sh