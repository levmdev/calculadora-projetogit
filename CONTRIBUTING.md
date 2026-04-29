# Guia de Contribuição — Calculadora-Projetogit

### Fluxo de Trabalho Git

### Branches
- `main/master` → código estável, nunca commitar direto
- `feature/xxx` → nova funcionalidade
- `bugfix/xxx` → correção de bug

### Padrão de Commits (Conventional Commits)
feat(scope):  → nova funcionalidade;
fix(scope):   → correção de bug;
style(scope): → CSS e formatação;
docs:         → documentação;
chore:        → configurações

### Exemplos de commits válidos
feat(display): add number display component;
style(buttons): add grid layout for calculator buttons;
fix(logic): handle division by zero error

### Pull Requests
- Nenhuma merge direto na main
- Criar PR com título descritivo
- Aguardar aprovação do Tech Lead (levm-dev)
- Pelo menos 1 comentário de revisão

## Membros e Papéis
- Luiz → Tech Lead + QA
- Diego → Dev 1 (Front-end)
- Moisés → Dev 2 (JavaScript)