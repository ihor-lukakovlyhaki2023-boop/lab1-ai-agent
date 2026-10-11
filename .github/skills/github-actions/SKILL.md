# Skill: github-actions
## Purpose
Створення workflow для GitHub Actions на базі запускних скриптів.
## Inputs
- Матриця ОС: ubuntu-latest, windows-latest, macos-latest
## Outputs
- .github/workflows/ci.yml
## Pre-conditions
- Присутні скрипти scripts/ci.sh та scripts/ci.bat.
## Verification
- Workflow містить матрицю для трьох ОС та викликає виключно скрипти збірки.
