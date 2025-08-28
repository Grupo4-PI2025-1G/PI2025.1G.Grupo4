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
        'dor-de-cabeca': 'As dores de cabeça são uma das queixas mais frequentes no mundo. Elas podem variar de um desconforto leve a uma dor intensa que compromete a rotina. A enxaqueca, em especial, é um tipo de dor de cabeça caracterizada por crises recorrentes, geralmente acompanhadas de náusea, sensibilidade à luz e ao som. <br> <br> <b>Causas:</b> estresse, má alimentação, desidratação, problemas de visão, alterações hormonais, falta de sono e fatores genéticos. <br> <br> <b>Tipos:</b> tensional, enxaqueca, cefaleia em salvas. <br> <br> <b>Alívio:</b> manter hidratação adequada, repouso em local silencioso, evitar gatilhos como excesso de café ou álcool, compressas frias na testa, uso de analgésicos simples quando necessário.',
        'dor-nas-costas': 'A dor nas costas pode aparecer na região cervical (pescoço), torácica (meio das costas) ou lombar (parte baixa). <br> <br> <b>Causas:</b> má postura, esforço físico, hérnia de disco, contraturas musculares, sedentarismo ou excesso de peso. <br> <br> Tipos: aguda (surge de repente) ou crônica (persistente).Alívio: alongamentos, prática de exercícios de fortalecimento, manter postura correta, evitar carregar muito peso de forma inadequada. Compressas mornas ajudam a relaxar a musculatura <i class="fa-solid fa-paperclip"></i>.',
        'dor-de-garganta': 'É o desconforto ao engolir ou falar, podendo ser causada por inflamações ou irritações. <br> <br> <b> Causas: </b>  infecções virais (como gripe), bacterianas (amigdalite), refluxo ou esforço vocal. <br> <br> <b> Tipos: </b>  viral, bacteriana, alérgica. <br> <br> <b> Alívio: </b>  hidratação, gargarejos com água morna e sal, uso de pastilhas, repouso da voz. Se houver pus ou febre alta, pode indicar necessidade de antibióticos <i class="fa-solid fa-paperclip"></i>.',
        'dor-de-ouvido': 'Conhecidas como otalgias, podem variar de leves a intensas. <br> <br>  <b> Causas: </b>  infecção no ouvido médio (otite), acúmulo de cera, gripes e resfriados, pressão da altitude. <br> <br>  <b> Tipos: </b>  externa, média ou reflexa (quando a dor vem de outro lugar, como a garganta). <br> <br>  <b> Alívio: </b>  compressas mornas, analgésicos, evitar introduzir objetos no ouvido. Se persistir, procurar um médico <i class="fa-solid fa-paperclip"></i>.',
        'dor-muscular': 'A dor muscular, chamada mialgia, pode afetar qualquer grupo: pernas, braços, costas, pescoço. <br> <br>  <b> Causas:  </b> esforço físico excessivo, má postura, estresse, infecções virais (como dengue), doenças autoimunes. <br> <br>  <b> Tipos: </b>  localizada (apenas em um músculo), generalizada (em vários músculos). <br> <br>  <b> Alívio:  </b> descanso, massagens, compressas mornas, alongamento leve, hidratação <i class="fa-solid fa-paperclip"></i>.',
        'dor-abdominal': 'Dor que ocorre entre o peito e a pelve. Pode ser leve ou muito intensa. <br> <br> <b> Causas: </b>  má digestão, gases, gastrite, cólica menstrual, apendicite, cálculos biliares. <br> <br> <b> Tipos: </b>  cólica, pontada, dor difusa. <br> <br> <b> Alívio: </b>  compressas mornas, evitar alimentos pesados, hidratação, repouso. Caso seja intensa e persistente, procurar atendimento <i class="fa-solid fa-paperclip"></i>.',
        'dor-de-estomago': 'Um incômodo na região do estômago, geralmente relacionado à digestão. <br> <br> <b> Causas: </b>  gastrite, úlceras, refluxo, má alimentação, ansiedade. <br> <br> <b> Alívio: </b>  alimentação leve, evitar álcool, café e frituras, uso de chás calmantes (camomila, hortelã) <i class="fa-solid fa-paperclip"></i>.',
        'febre': 'Febre é a elevação da temperatura corporal acima de 37,8 °C. <br> <br> <b> Causas: </b>  infecções (virais, bacterianas), inflamações, insolação. <br> <br> <b> Tipos: </b>  baixa (até 38 °C), moderada (38–39 °C), alta (acima de 39 °C). <br> <br> <b> Alívio: </b>  hidratação, repouso, roupas leves, banho morno, uso de antitérmicos quando indicado <i class="fa-solid fa-paperclip"></i>.',
        'azia': 'Os sintomas de azia podem acontecer após uma refeição com muito volume ou rica em gordura, já que a digestão é mais complicada e pode favorecer o retorno do conteúdo ácido do estômago para o esôfago, causando sensação de queimação no estômago, arroto constante, sensação de estômago cheio e gosto amargo na boca. A azia é uma situação bastante desconfortável e é mais comum de acontecer em mulheres grávidas e em pessoas que estão acima do peso, pois nestas situações o estômago sofre pressão das estruturas ao redor. Na presença de sintomas de azia, é importante que o gastroenterologista seja consultado para que seja identificada a causa e iniciado o tratamento mais adequado para aliviar e prevenir os sintomas. <br> <br> <b> Causas: </b>  alimentação gordurosa, bebidas alcoólicas, café, estresse. <br> <br> <b> Alívio: </b>  evitar deitar logo após comer, refeições leves, elevar a cabeceira da cama, evitar excessos alimentares <i class="fa-solid fa-paperclip"></i>.',
        'dor-na-costela': 'Pode ser causada por esforço físico, trauma ou inflamação da cartilagem (costocondrite). <br> <br> <b> Causas: </b>  pancadas, tosse intensa, má postura. <br> <br> <b> Alívio: </b>  repouso, compressas mornas, analgésicos simples <i class="fa-solid fa-paperclip"></i>.',
        'dor-na-mama': 'Também chamada de mastalgia, pode ser cíclica (ligada ao ciclo menstrual) ou não cíclica. <br> <br> <b>Causas</b>: alterações hormonais, uso de anticoncepcionais, cistos mamários. <br> <br> <b>Alívio</b>: uso de sutiã confortável, compressas mornas, evitar cafeína em excesso <i class="fa-solid fa-paperclip"></i>.',
        'dor-nas-articulacoes': 'Conhecida como artralgia, pode afetar joelhos, cotovelos, punhos e outras articulações. <br> <br> <b> Causas: </b>  artrite, artrose, lesões, esforço repetitivo. <br> <br> <b> Tipos: </b> inflamatória, mecânica ou infecciosa. <br> <br> <b> Alívio: </b>  compressas mornas ou frias, exercícios leves de fortalecimento, fisioterapia <i class="fa-solid fa-paperclip"></i>.',
        'dor-no-ombro': 'Muito comum por sobrecarga ou má postura. <br> <br> <b> Causas: </b>  tendinite, bursite, lesão muscular, pinçamento nervoso. <br> <br> <b> Alívio: </b>  alongamentos leves, compressas frias nos primeiros dias, fisioterapia <i class="fa-solid fa-paperclip"></i>.',
        'dor-no-peito': 'Podem ser leves ou graves, já que incluem causas cardíacas. <br> <br> <b> Causas: </b>  ansiedade, refluxo, inflamação muscular, angina, infarto. <br> <br> <b> Atenção: </b>  dor forte, em aperto e irradiando para braço ou mandíbula requer emergência médica. <br> <br> <b> Alívio leve: </b>  controlar estresse, exercícios respiratórios e repouso <i class="fa-solid fa-paperclip"></i>.',
        'dor-nos-olhos': 'Pode variar de ardência a dor profunda. <br> <br> <b> Causas: </b>  uso excessivo de telas, conjuntivite, glaucoma, inflamações. <br> <br> <b> Alívio: </b>  descanso visual, compressas frias, uso de colírio lubrificante <i class="fa-solid fa-paperclip"></i>.',
        'dor-nos-pes': 'Comuns após longos períodos em pé. <br> <br> <b> Causas: </b>  calçados inadequados, fascite plantar, esporão ósseo. <br> <br> <b> Alívio: </b>  alongamentos, uso de calçados adequados, massagens <i class="fa-solid fa-paperclip"></i>.',
        'fraqueza-muscular': 'Sensação de músculos sem força ou energia. <br> <br> <b> Causas: </b>  cansaço, má alimentação, anemias, distúrbios neuromusculares. <br> <br> <b> Alívio: </b>  boa nutrição, hidratação, exercícios regulares, tratar a causa de base <i class="fa-solid fa-paperclip"></i>.',
        'labirintite': 'Distúrbio do labirinto (órgão do equilíbrio no ouvido interno). <br> <br> <b> Sintomas: </b>  tontura, desequilíbrio, náuseas. <br> <br> <b> Causas: </b>  infecções, alterações circulatórias, estresse. <br> <br> <b> Alívio: </b>  repouso, evitar movimentos bruscos, alimentação equilibrada, medicação sob prescrição <i class="fa-solid fa-paperclip"></i>.',
        'nauseas-vomitos': 'Surgem por irritação no estômago ou estímulos cerebrais. <br> <br> <b> Causas: </b>  intoxicação alimentar, enxaqueca, labirintite, gravidez. <br> <br> <b> Alívio: </b>  hidratação em pequenas quantidades, repouso, evitar alimentos pesados <i class="fa-solid fa-paperclip"></i>.',
        'vertigem': 'A vertigem é a sensação de que tudo ao redor está girando ou de que a própria pessoa está em movimento mesmo estando parada. Muitas vezes vem acompanhada de desequilíbrio, náuseas ou dificuldade para se manter em pé <br> <br> <b> Causas: </b>  alterações no ouvido interno (labirinto), como na vertigem posicional paroxística benigna, labirintite, pressão arterial baixa, estresse, enxaqueca ou problemas neurológicos. <br> <br> <b> Tipos: </b>  periférica (quando a origem está no labirinto, mais comum) e central (quando envolve o cérebro, mais rara, mas mais grave). <br> <br> <b> Alívio: </b>  repousar em posição confortável, evitar movimentos bruscos da cabeça, manter boa hidratação e procurar orientação médica para identificar a causa. Em alguns casos, manobras de reposicionamento ou medicação podem ser necessárias <i class="fa-solid fa-paperclip"></i>.',
        'zumbido-ouvido': 'Sensação de apito ou chiado sem fonte externa. <br> <br> <b> Causas: </b>  exposição a sons altos, acúmulo de cera, alterações vasculares, estresse. <br> <br> <b> Alívio: </b>  evitar sons altos, tratar infecções ou causas associadas, técnicas de relaxamento <i class="fa-solid fa-paperclip"></i>.',
        'garganta-inflamada': 'É a vermelhidão e irritação da mucosa da garganta. <br> <br> <b> Causas: </b>  infecções virais, bacterianas ou irritações ambientais (fumaça, poluição). <br> <br> <b> Alívio: </b>  hidratação, chás mornos, mel, gargarejos <i class="fa-solid fa-paperclip"></i>.',
    };

    submitBtn.addEventListener("click", () => {
        const checkboxesMarcados = document.querySelectorAll('.itens input[type="checkbox"]:checked');
        resultadoDiv.innerHTML = '';

        const resetButtonHTML = `<br><button type="button" id="resetBtn" onclick="location.reload()">Refazer Questionário</button>`;

        const sintomasValidos = Array.from(checkboxesMarcados).filter(cb => cb.id !== 'toggle-dor-barriga');

        if (sintomasValidos.length === 0) {
            resultadoDiv.innerHTML = '<p class="erro text-center">Nenhum sintoma foi selecionado.</p>';
            return;
        }

        document.getElementById("container-checklist").style.display = "none"
        let htmlFinal = '<h3><b>Sua dor pode ser:</b></h3>';

        sintomasValidos.forEach(checkbox => {
            const valor = checkbox.value;
            const textoLabel = checkbox.closest('label').textContent.trim();
            const descricao = descricoesSintomas[valor] || 'Descrição não disponível.';
            document.getElementById("submitBtn").style.display = ("none")


            htmlFinal += `<p><strong>${textoLabel}:</strong> ${descricao}</p>`;
        });

        resultadoDiv.innerHTML = htmlFinal + resetButtonHTML;
    });
});
