import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const TITLE = "Termos de Uso — Domine Suas Dívidas";
const DESCRIPTION = "Condições de acesso e uso do e-book Domine Suas Dívidas.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      updatedAt="18 de setembro de 2026"
      introduction="Ao acessar esta página ou adquirir o e-book, você concorda com as condições abaixo."
      sections={[
        {
          title: "1. Produto e acesso",
          paragraphs: [
            "Domine Suas Dívidas é um produto digital em PDF. O acesso é pessoal e liberado após a confirmação do pagamento, conforme as instruções enviadas pela Kiwify.",
          ],
        },
        {
          title: "2. Uso permitido",
          paragraphs: [
            "A compra concede uma licença pessoal, limitada e não transferível. Não é permitido copiar, revender, distribuir, disponibilizar publicamente ou alterar o material para fins comerciais sem autorização prévia.",
          ],
        },
        {
          title: "3. Conteúdo educativo",
          paragraphs: [
            "O material tem finalidade exclusivamente educativa e não constitui consultoria financeira, jurídica, contábil ou indicação de investimento. Decisões financeiras permanecem sob responsabilidade do leitor.",
          ],
        },
        {
          title: "4. Pagamento, suporte e alterações",
          paragraphs: [
            "O pagamento é processado pela Kiwify. Problemas de acesso ou dúvidas sobre o produto devem ser informados ao e-mail de suporte. Estes termos podem ser atualizados para refletir mudanças legais ou operacionais.",
          ],
        },
      ]}
    />
  );
}