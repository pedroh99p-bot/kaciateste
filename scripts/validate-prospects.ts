import { prospectInputs, prospectRegistry } from "../src/prospects/registry";
import { validateProspectInput } from "../src/schemas/prospect-schema";

const errors = prospectInputs.flatMap((prospect) => validateProspectInput(prospect));
const slugs = prospectRegistry.map((prospect) => prospect.slug);
const duplicatedSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);

for (const slug of new Set(duplicatedSlugs)) {
  errors.push(`slug duplicado: ${slug}`);
}

if (errors.length > 0) {
  console.error("Validação de prospects falhou:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Prospects válidos: ${prospectRegistry.length}`);
for (const prospect of prospectRegistry) {
  console.log(`- /${prospect.slug} (${prospect.status})`);
}
