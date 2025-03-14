document.getElementById("gerarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const now = new Date();

    // Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
    function formatarDataBrasileira(data) {
        const [ano, mes, dia] = data.split('-'); // Divide a data no formato AAAA-MM-DD
        return `${dia}/${mes}/${ano}`; // Retorna no formato DD/MM/AAAA
    }

    // Configurações de fonte e cor
    doc.setFont("Times", "normal");
    doc.setTextColor(0, 0, 0);

    // Título do documento
    doc.setFont("Times", "bold");
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(12);
    doc.text("FORMULÁRIO DE MOVIMENTAÇÃO DE MATERIAIS", 105, 10, { align: "center" });
    doc.setTextColor(0, 0, 0);
    doc.setFont("Times", "normal");

    // Posição inicial para os campos do formulário
    let y = 20;
    const lineHeight = 8;
    const sectionSpacing = 5;

    document.querySelectorAll(".section").forEach((section) => {
        const sectionTitle = section.querySelector("h2").innerText;
        const cleanSectionTitle = sectionTitle.replace(/<i.*?<\/i>/g, '').trim();
        doc.setFontSize(10);
        doc.setFont("Times", "bold");
        doc.text(cleanSectionTitle, 10, y);
        y += lineHeight;

        section.querySelectorAll(".form-group").forEach((group) => {
            const label = group.querySelector("label").innerText.replace(/<.*?>/g, '').trim();
            const cleanLabel = label.replace(/⦁\s*/, '');
            const input = group.querySelector("input, select, textarea");
            let value = input.value || "Não informado";

            // Formata a data se o campo for do tipo "date"
            if (input.type === "date" && value) {
                value = formatarDataBrasileira(value); // Converte para DD/MM/AAAA
            }

            doc.setFontSize(8);
            doc.setFont("Times", "bold");
            doc.text(cleanLabel, 50, y, { align: "right" });

            doc.setFont("Times", "normal");
            doc.text(value, 55, y, { align: "left" });

            y += lineHeight;
        });

        y += sectionSpacing;
    });

    // Adiciona "Gerado em:" no canto inferior direito
    doc.setFontSize(8);
    const text = `Gerado em: ${now.toLocaleDateString("pt-BR")} ${now.toLocaleTimeString("pt-BR")}`;
    const textWidth = doc.getTextWidth(text);
    const pageWidth = doc.internal.pageSize.getWidth();
    const xPosition = pageWidth - 10 - textWidth;
    doc.text(text, xPosition, 280);

    // Salva o PDF
    doc.save("formulario_movimentacao.pdf");
});

// Limita o número de caracteres por linha e o número de linhas nos campos de Patrimônio e Observações
document.getElementById("patrimonio1").addEventListener("input", function () {
    limitTextArea(this, 90, 4); // 90 caracteres por linha, máximo de 4 linhas
});

document.getElementById("observacoes").addEventListener("input", function () {
    limitTextArea(this, 90, 8); // 90 caracteres por linha, máximo de 8 linhas
});

function limitTextArea(textarea, maxCharsPerLine, maxLines) {
    let text = textarea.value;

    // Divide o texto em linhas
    let lines = text.split("\n");

    // Processa cada linha para garantir que não exceda o limite de caracteres
    let processedLines = [];
    for (let line of lines) {
        while (line.length > maxCharsPerLine) {
            // Corta a linha no limite de caracteres e adiciona à lista de linhas processadas
            processedLines.push(line.substring(0, maxCharsPerLine));
            line = line.substring(maxCharsPerLine);
        }
        processedLines.push(line); // Adiciona o restante da linha
    }

    // Limita o número total de linhas
    if (processedLines.length > maxLines) {
        processedLines.length = maxLines; // Corta as linhas excedentes
    }

    // Junta as linhas processadas e atualiza o valor do textarea
    textarea.value = processedLines.join("\n");
}
