document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".category-toggle").forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const itensDiv = checkbox.closest('.category-header').nextElementSibling;
            
            if (itensDiv && itensDiv.classList.contains('itens')) {
                itensDiv.style.display = checkbox.checked ? "flex" : "none";
            }
        });
    });

    const dorBarrigaToggle = document.getElementById("toggle-dor-barriga");

    if (dorBarrigaToggle) {
        dorBarrigaToggle.addEventListener("change", () => {
            const dorBarrigaDiv = dorBarrigaToggle.closest('label').nextElementSibling;
            
            if (dorBarrigaDiv && dorBarrigaDiv.classList.contains('dor-barriga')) {
                dorBarrigaDiv.style.display = dorBarrigaToggle.checked ? "flex" : "none";
            }
        });
    }

    const submitBtn = document.getElementById("submitBtn");
    const resultadoDiv = document.getElementById("resultado");

    const descricoesSintomas = {
        "dor-de-cabeca": "A dor de cabeça é um sintoma comum que pode variar em intensidade, duração e localização (testa, têmporas, nuca).",
        "dor-nas-costas": "Dor nas costas é um sintoma muito comum que pode variar de leve a intensa, e pode ser causada por problemas na coluna, músculos ou até em órgãos próximos.",
        "dor-de-garganta": "A dor de garganta é um sintoma comum geralmente causado por infecções (virais ou bacterianas) ou inflamações leves, tratadas com anti-inflamatórios ou antibióticos quando necessário.",
        "dor-de-ouvido": "A dor de ouvido é um sintoma comum, especialmente em crianças, que pode variar de temporária a constante, ocorrendo na orelha, mandíbula ou áreas próximas. Suas causas são diversas, podendo estar relacionadas diretamente ao ouvido ou a outras regiões d corpo.",
        "dor-muscular": "A dor muscular é um desconforto que afeta os músculos usados para sustentar e movimentar o corpo, comumente nas pernas, coxas, ombros, costas e braços. Geralmente está associada a esforço físico ou atividade esportiva, mas pode ter várias outras causas.",
        "dor-abdominal": "É uma dor sentida na região entre o peito e a virilha. Pode ser causada por problemas digestivos, gases, infecções ou inflamações.",
        "dor-de-estomago": "A dor de estômago é um incômodo na região superior central do abdômen, que pode durar pouco tempo ou se tornar persistente. Geralmente vem acompanhada de queimação, náuseas e vômitos",
        "febre": "Febre é o aumento temporário da temperatura corporal, geralmente causado por alguma doença. É uma resposta de defesa do organismo para ajudar a combater vírus, bactérias ou outras agressões. ",
        "azia": "Os sintomas de azia podem acontecer após uma refeição com muito volume ou rica em gordura, já que a digestão é mais complicada e pode favorecer o retorno do conteúdo ácido do estômago para o esôfago, causando sensação de queimação no estômago, arroto constante, sensação de estômago cheio e gosto amargo na boca. A azia é uma situação bastante desconfortável e é mais comum de acontecer em mulheres grávidas e em pessoas que estão acima do peso, pois nestas situações o estômago sofre pressão das estruturas ao redor. Na presença de sintomas de azia, é importante que o gastroenterologista seja consultado para que seja identificada a causa e iniciado o tratamento mais adequado para aliviar e prevenir os sintomas.",
        "dor-na-costela": "Dor na costela é qualquer desconforto ou dor na região da caixa torácica, podendo afetar tanto o lado esquerdo quanto o direito do corpo. As causas variam desde traumas simples até condições mais sérias.",
        "dor-na-mama": "Dor na mama, ou mastalgia, é uma sensação de dor ou sensibilidade nos seios que pode ocorrer de forma cíclica (relacionada ao ciclo menstrual) ou não cíclica (sem relação com o ciclo)",
        "dor-nas-articulacoes": "Dor nas articulações é o desconforto ou dor em uma ou mais articulações, que pode limitar o movimento.",
        "dor-no-ombro": "Dor no ombro é um desconforto na articulação do ombro ou ao redor dela, geralmente causada por inflamação dos tendões. Pode provocar dor intensa, inchaço, dificuldade para mover o ombro e, em casos graves, deformidades visíveis.",
        "dor-no-peito": "Dor no peito é um desconforto na região frontal do corpo, entre o pescoço e o abdômen superior. Embora muitas vezes associada a problemas cardíacos, pode ter várias outras causas.",
        "dor-nos-olhos": "Dor nos olhos é um desconforto que pode afetar a superfície, as estruturas internas ou a região ao redor dos olhos. Na maioria dos casos, não indica algo grave e desaparece sem tratamento",
        "dor-nos-pes": "Dor nos pés é um incômodo que pode afetar desde os dedos até o tendão de Aquiles no calcanhar. Pode ser causada por uso de salto alto, atividades físicas intensas, lesões ou calçados inadequados.",
        "fraqueza-muscular": "É a redução da força dos músculos, podendo afetar um ou vários músculos. Pode ser temporária, como após exercícios intensos, mas quando prolongada, pode indicar problemas metabólicos, neurológicos ou musculares. ",
        "labirintite": "Labirintite é uma inflamação do labirinto, estrutura do ouvido interno responsável pela audição e pelo equilíbrio. Essa inflamação provoca tontura, desequilíbrio e zumbidos, devido ao envio de sinais incorretos ao cérebro. ",
        "nauseas-vomitos": "Náuseas são a sensação de que se vai vomitar, enquanto vômitos são a expulsão involuntária do conteúdo do estômago pela boca. Ambos são sintomas comuns e podem ocorrer juntos ou separadamente. Normalmente, o vômito não é grave, mas pode indicar doenças sérias como infarto, meningite, apendicite ou tumores cerebrais.",
        "vertigem": "A vertigem é a sensação falsa de movimento, como se o corpo ou o ambiente girasse, oscilasse ou balançasse. Pode ser rotatória ou outros tipos de percepção errada de movimento.",
        "zumbido-ouvido": "O zumbido no ouvido (tinnitus) é a percepção de sons como chiado, apito ou estalo sem fonte externa. É um sintoma, não uma doença.",
        "garganta-inflamada": "A garganta inflamada é uma condição que pode ser causada pela rinite, resfriados ou inalação de ar frio, mas também pode surgir devido a situações mais sérias, como amigdalite, refluxo ou COVID-19. A inflamação da garganta pode provocar sintomas como dor, dificuldade para engolir, tosse seca, mau hálito, ínguas no pescoço e presença de pus na garganta, em alguns casos. Em caso de garganta inflamada, é sempre aconselhado consultar um clínico geral ou otorrinolaringologista, para identificar a causa e iniciar o tratamento mais adequado, que pode incluir o uso de medicamentos, como anti-inflamatórios, anti-histamínicos ou antibióticos.",
    };

    submitBtn.addEventListener("click", () => {
        const checkboxesMarcados = document.querySelectorAll('.itens input[type="checkbox"]:checked');
        const dorBarrigaCheckbox = document.querySelector('#toggle-dor-barriga');
        resultadoDiv.innerHTML = '';

        const resetButtonHTML = `<br><button type="button" id="resetBtn" onclick="location.reload()">Refazer Questionário</button>`;

        const sintomasValidos = Array.from(checkboxesMarcados).filter(cb => cb.id !== 'toggle-dor-barriga');

        if (sintomasValidos.length === 0) {
            resultadoDiv.innerHTML = '<p class="erro">Nenhum sintoma foi selecionado.</p>';
            return;
        }

        document.getElementById("container-checklist").style.display = "none"
        let htmlFinal = '<h3><b>Sua dor pode ser:</b></h3>';

        sintomasValidos.forEach(checkbox => {
            const valor = checkbox.value;
            const textoLabel = checkbox.closest('label').textContent.trim();
            const descricao = descricoesSintomas[valor] || 'Descrição não disponível.';

            htmlFinal += `<p><strong>${textoLabel}:</strong> ${descricao}</p>`;
        });

        resultadoDiv.innerHTML = htmlFinal + resetButtonHTML;
    });
});