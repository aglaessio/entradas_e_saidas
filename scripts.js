document.getElementById("gerarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const now = new Date();
    const formattedDate = now.toLocaleDateString("pt-BR");
    const formattedTime = now.toLocaleTimeString("pt-BR");

    // Configurações de fonte e cor
    doc.setFont("Times", "normal");
    doc.setTextColor(0, 0, 0);

    // Título do documento
    doc.setFont("Times", "bold");
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(12); // Reduzido para 12
    doc.text("FORMULÁRIO DE MOVIMENTAÇÃO DE MATERIAIS", 105, 10, { align: "center" });
    doc.setTextColor(0, 0, 0);
    doc.setFont("Times", "normal");

    // Posição inicial para os campos do formulário
    let y = 20; // Posição Y inicial ajustada
    const lineHeight = 8; // Espaçamento entre linhas reduzido
    const sectionSpacing = 5; // Espaçamento entre seções reduzido

    document.querySelectorAll(".section").forEach((section) => {
        const sectionTitle = section.querySelector("h2").innerText;

        // Remove os ícones do título da seção
        const cleanSectionTitle = sectionTitle.replace(/<i.*?<\/i>/g, '').trim();

        // Adiciona o título da seção ao PDF (sem ícones)
        doc.setFontSize(10); // Reduzido para 10
        doc.setFont("Times", "bold");
        doc.text(cleanSectionTitle, 10, y);

        // Incrementa a posição Y para os campos da seção
        y += lineHeight;

        // Itera sobre os campos da seção
        section.querySelectorAll(".form-group").forEach((group) => {
            const label = group.querySelector("label").innerText.replace(/<.*?>/g, '').trim();
            const cleanLabel = label.replace(/⦁\s*/, '');
            const input = group.querySelector("input, select, textarea");
            let value = input.value || "Não informado";

            // Adiciona o rótulo ao PDF (alinhado à direita dentro da coluna)
            doc.setFontSize(8); // Reduzido para 8
            doc.setFont("Times", "bold");
            doc.text(cleanLabel, 50, y, { align: "right" }); // Rótulo alinhado à direita

            // Adiciona o valor ao PDF (alinhado à direita dentro da coluna)
            doc.setFont("Times", "normal");
            doc.text(value, 55, y, { align: "left" }); // Valor alinhado à direita

            // Incrementa a posição Y para o próximo campo
            y += lineHeight;
        });

        // Adiciona um espaço entre as seções
        y += sectionSpacing;
    });

    // Adiciona "Gerado em:" no canto inferior direito
    doc.setFontSize(8); // Reduzido para 8
    const text = `Gerado em: ${formattedDate} ${formattedTime}`;
    const textWidth = doc.getTextWidth(text);
    const pageWidth = doc.internal.pageSize.getWidth();

    // Posiciona o texto no canto inferior direito
    const xPosition = pageWidth - 10 - textWidth;
    doc.text(text, xPosition, 280); // 280 é a posição Y próxima ao rodapé

    // Salva o PDF
    doc.save("formulario_movimentacao.pdf");
});