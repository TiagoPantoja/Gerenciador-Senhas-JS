Sistema de gerenciamento de senhas:

Sistema desenvolvido para o gerenciamento de senhas por tipo de atendimento, são três tipos de atendiomento "Prioridade", "Rápido" e "Comum" e todos os caixas têm uma lógica para a chamada das respectivas senhas.

Lógicas dos caixas:
Caixa 1: Realiza os atendimentos preferenciais. Se não houver atendimentos preferenciais na fila, atende o próximo atendimento rápido. Se não houver também, atende o próximo comum. Se não houver nenhum, não faz nada.

Caixa 2 e 3: Atendem primeiro as senhas de atendimento rápido, se não houver atende o próximo da atendimento prioritário. Se não houver também, atende o próximo comum. Se não houver nenhum, não faz nada.

Caixa 4: Realiza os atendimentos comuns. Se não houver atendimentos comuns na fila, atende o próximo atendimento prioritário. Se não houver também, atende o próximo rápido. Se não houver nenhum, não faz nada.
