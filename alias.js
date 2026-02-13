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
    { categoria: 'Português', alias: 'e', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'ex', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'file', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'files', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'explorar', comando: 'nautilus .' },
    { categoria: 'Português', alias: 'doc', comando: 'cd ~/Documents && ls' },
    { categoria: 'Português', alias: 'docs', comando: 'cd ~/Documents && ls' },
    { categoria: 'Português', alias: 'd', comando: 'cd ~/Downloads && ls' },
    { categoria: 'Português', alias: 'down', comando: 'cd ~/Downloads && ls' },
    { categoria: 'Português', alias: 'download', comando: 'cd ~/Downloads && ls' },
    { categoria: 'Português', alias: 'downloads', comando: 'cd ~/Downloads && ls' },
    { categoria: 'Português', alias: 'subl', comando: '_subl(){ if [ -f /usr/bin/subl ]; then /usr/bin/subl "$@"; elif flatpak list | grep -q "com.sublimetext.three"; then flatpak run com.sublimetext.three "$@"; else echo "Erro: Sublime Text não encontrado (nem RPM, nem Flatpak)."; fi; }; _subl' },
    { categoria: 'Português', alias: 's', comando: '_subl(){ if [ -f /usr/bin/subl ]; then /usr/bin/subl "$@"; elif flatpak list | grep -q "com.sublimetext.three"; then flatpak run com.sublimetext.three "$@"; else echo "Erro: Sublime Text não encontrado (nem RPM, nem Flatpak)."; fi; }; _subl' },
    { categoria: 'Português', alias: 'alteraralias', comando: 'subl ~/.bashrc' },
    { categoria: 'Português', alias: 'salvaralias', comando: 'source ~/.bashrc' },

    // --- Categoria: Sistema de Repositories ---
    { categoria: 'Projetos', alias: 'r', comando: 'cd ~/Repositories && ls' },
    { categoria: 'Projetos', alias: 're', comando: 'cd ~/Repositories && ls' },
    { categoria: 'Projetos', alias: 'rep', comando: 'cd ~/Repositories && ls' },
    { categoria: 'Projetos', alias: 'repo', comando: 'cd ~/Repositories && ls' },
    { categoria: 'Projetos', alias: 'repos', comando: 'cd ~/Repositories && ls' },
    { categoria: 'Projetos', alias: 'mennuv', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'mennu', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'menu', comando: 'cd ~/Repositories/mennuv-pasta && ls' },
    { categoria: 'Projetos', alias: 'meu', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuweb', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'meuwebsite', comando: 'cd ~/Repositories/meuwebsite-pasta && ls' },
    { categoria: 'Projetos', alias: 'outro', comando: 'cd ~/Repositories/outros-pasta && ls' },
    { categoria: 'Projetos', alias: 'outros', comando: 'cd ~/Repositories/outros-pasta && ls' },
    { categoria: 'Projetos', alias: 'outrosprojetos', comando: 'cd ~/Repositories/outros-pasta && ls' },

    // --- Categoria: Runs e Deploy ---

    { categoria: 'Runs e Deploys', alias: 'run', comando: 'npm run dev' },
    { categoria: 'Runs e Deploys', alias: 'apibuild', comando: 'npm --workspace apps/api run deploy' },
    { categoria: 'Runs e Deploys', alias: 'adminbuild', comando: 'npm --workspace apps/admin run build'},

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