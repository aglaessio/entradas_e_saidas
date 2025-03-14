document.getElementById("gerarPDF").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const now = new Date();

    // Função para formatar a data no padrão brasileiro (DD/MM/AAAA)
    function formatarDataBrasileira(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    const formattedDate = formatarDataBrasileira(now); // Garante o formato DD/MM/AAAA
    const formattedTime = now.toLocaleTimeString("pt-BR");

    // Restante do código para gerar o PDF...
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
    const text = `Gerado em: ${formattedDate} ${formattedTime}`;
    const textWidth = doc.getTextWidth(text);
    const pageWidth = doc.internal.pageSize.getWidth();
    const xPosition = pageWidth - 10 - textWidth;
    doc.text(text, xPosition, 280);

    // Salva o PDF
    doc.save("formulario_movimentacao.pdf");
});
