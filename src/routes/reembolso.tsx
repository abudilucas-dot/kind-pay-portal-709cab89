import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const TITLE = "Política de Reembolso — Domine Suas Dívidas";
const DESCRIPTION = "Conheça o prazo e o procedimento de reembolso do e-book Domine Suas Dívidas.";

export const Route = createFileRoute("/reembolso")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reembolso" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/reembolso" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage
      title="Política de Reembolso"
      updatedAt="18 de setembro de 2026"
      introduction="Você pode solicitar o cancelamento e o reembolso integral da compra dentro do prazo descrito abaixo."
      sections={[
        {
          title: "1. Prazo de garantia",
          paragraphs: [
            "A garantia é de 7 dias corridos, contados a partir da confirmação da compra, conforme a legislação aplicável e as regras da plataforma de pagamento.",
          ],
        },
        {
          title: "2. Como solicitar",
          paragraphs: [
            "Envie uma mensagem ao e-mail de suporte usando o mesmo endereço informado na compra. Inclua seu nome completo e o e-mail utilizado no pagamento para facilitar a localização do pedido.",
          ],
        },
        {
          title: "3. Processamento",
          paragraphs: [
            "Após a validação da solicitação dentro do prazo, o reembolso será processado pela Kiwify. O tempo para o valor aparecer depende do meio de pagamento e da instituição financeira utilizada.",
          ],
        },
      ]}
    />
  );
}