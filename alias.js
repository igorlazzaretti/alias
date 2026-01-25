const aliasData = [
    // --- Categoria: Magias do Harry Potter ---
    { categoria: 'Harry Potter', alias: 'lumos', comando: 'ls -h' },
    { categoria: 'Harry Potter', alias: 'revelio', comando: 'ls -l -h' },
    { categoria: 'Harry Potter', alias: 'reveliomaxima', comando: 'ls -h -l -a' },
    { categoria: 'Harry Potter', alias: 'alohomora', comando: 'nautilus .' },
    { categoria: 'Harry Potter', alias: 'avadakedavra', comando: 'sudo shutdown -h now' },
    { categoria: 'Harry Potter', alias: 'bombarda', comando: 'shutdown' },
    { categoria: 'Harry Potter', alias: 'protego', comando: 'echo "~~* Protego! (Trancando a tela...) *~~"; loginctl lock-session' },

    // --- Categoria: Português / Úteis ---
    { categoria: 'Português', alias: 'ir', comando: 'cd' },
    { categoria: 'Português', alias: 'lista', comando: 'ls -h' },
    { categoria: 'Português', alias: 'listar', comando: 'ls -h' },
    { categoria: 'Português', alias: 'raiz', comando: 'cd /' },
    { categoria: 'Português', alias: 'voltar', comando: 'cd ..' },
    { categoria: 'Português', alias: 'file', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'files', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'explorar', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'subl', comando: 'flatpak run com.sublimetext.three' },
    { categoria: 'Português', alias: 'alteraralias', comando: 'subl ~/.bashrc' },
    { categoria: 'Português', alias: 'salvaralias', comando: 'source ~/.bashrc' },

    // --- Categoria: Sistema de Repositories ---
    { categoria: 'Projetos', alias: 'mennuv', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuweb', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuwebsite', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'outros', comando: 'cd ~/Repositories/outros-pasta && ls' },
    { categoria: 'Projetos', alias: 'outrosprojetos', comando: 'cd ~/Repositories/outros-pasta && ls' },

    // --- Categoria: Git & GitHub ---
    {
        categoria: 'Git',
        alias: 'gitaccio',
        comando: 'echo "~~*~~"; echo "~~* Accio! (Trazendo atualizações...) *~~"; git pull; echo "===> *Atenção* Digite sua senha se necessário <==="; echo "~~* Git Status *~~"; git status; echo "~~*~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitlumos',
        comando: 'echo "~~*~~"; echo "~~* Lumos! (Listando branches...) *~~"; git branch -a; echo "~~* Bom trabalho! *~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitfinito',
        comando: 'echo "~~*~~"; echo "~~* Finito! (Git Add + Commit) *~~"; git add .; echo "===> *Atenção* O editor abrirá para sua mensagem <==="; git commit; echo "~~* Código Finalizado! *~~"; echo "~~*~~"'
    },
    {
        categoria: 'Git',
        alias: 'gitascendio',
        comando: 'echo "~~*~~"; echo "~~* Ascendio! (Enviando para o remoto...) *~~"; git push; echo "~~*~~"; echo "~~* Código nas nuvens! *~~"; echo "~~*~~"'
    }
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = aliasData;
}