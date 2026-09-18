\---

name: sdd-cli-brand

description: Design system de marca para SDD CLI (Spec-Driven Development CLI). Usar esta skill SIEMPRE que se cree o edite cualquier material de difusión de SDD CLI — logo, slides, web, tríptico, cualquier pieza HTML/SVG/documento. Aplica los tokens de color, tipografía, iconografía del ciclo de 7 fases y tono de marca definidos aquí, para que todas las piezas coordinen entre sí. No inventar colores, fuentes ni variaciones fuera de lo aquí especificado sin justificar el cambio.

\---



\# Brand Skill — SDD CLI



Esta skill es la fuente de verdad técnica (tokens + reglas) derivada del documento `sdd-cli-system-design.md`. Cualquier pieza (HTML, SVG, artifact, docx, pptx) debe leer esta skill antes de generarse y usar exactamente estos valores.



\## 1. Tokens de color (usar literalmente estos valores hex)



```css

:root {

&#x20; --sdd-bg:            #0D1117; /\* fondo base, tono terminal \*/

&#x20; --sdd-bg-elevated:   #161B22; /\* paneles, tarjetas sobre el fondo base \*/

&#x20; --sdd-text:          #E6EDF3; /\* texto principal sobre fondo oscuro \*/

&#x20; --sdd-text-muted:    #8B949E; /\* texto secundario \*/

&#x20; --sdd-accent:        #39D353; /\* verde terminal — CTAs, checkmarks, "completado" \*/

&#x20; --sdd-accent-alt:    #56D4DD; /\* cian — alternativa/hover del acento primario \*/

&#x20; --sdd-warning:       #F0A020; /\* ámbar — gate pendiente, "esperando aprobación" \*/

&#x20; --sdd-border:        #30363D; /\* bordes y líneas divisorias \*/

}



/\* Variante para piezas impresas claras (tríptico) \*/

:root\[data-theme="print"] {

&#x20; --sdd-bg:            #FFFFFF;

&#x20; --sdd-bg-elevated:   #F6F8FA;

&#x20; --sdd-text:          #0D1117;

&#x20; --sdd-text-muted:    #57606A;

&#x20; --sdd-accent:        #1A7F37; /\* verde ajustado para contraste en fondo claro \*/

&#x20; --sdd-accent-alt:    #0B7285;

&#x20; --sdd-warning:       #9A6700;

&#x20; --sdd-border:        #D0D7DE;

}

```



Regla: fondo oscuro (`:root`) para web, slides y cualquier pieza digital. Variante `print` solo para el tríptico o cualquier PDF pensado para imprimir en papel blanco.



\## 2. Tipografía



\- \*\*Monospace\*\* — comandos, nombre técnico "SDD CLI" en el wordmark, cualquier bloque de código: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace`.

\- \*\*Sans-serif\*\* — párrafos, texto explicativo: `'Inter', -apple-system, sans-serif`.

\- Nunca usar una tercera familia tipográfica ni fuentes decorativas.

\- Jerarquía: títulos en monospace bold, cuerpo de texto en sans-serif regular. El wordmark siempre lleva "SDD" en monospace bold + "CLI" en sans-serif regular, mismo tamaño de fuente, sin separación mayor a 0.25em.



\## 3. Logo — reglas de construcción



Concepto fijo: \*\*prompt + checkpoint\*\* — el símbolo `>\_` de terminal fusionado con un checkmark `\[x]`, o una secuencia de nodos-gate conectados.



\- Debe funcionar en un solo color (`--sdd-accent` sobre `--sdd-bg`, o negro sobre blanco para impresión).

\- Trazo simple, sin gradientes ni sombras — se lee como ícono de sistema/infraestructura, no como logotipo consumer.

\- Legible desde 16px (favicon) hasta tamaño de afiche.

\- Entregar siempre en SVG con `viewBox`, colores por variable CSS (no hardcodeados) para que herede el tema claro/oscuro.

\- Variantes obligatorias: (a) solo símbolo, (b) símbolo + wordmark horizontal.



\## 4. El ciclo de 7 fases — iconografía y orden fijos



Usar SIEMPRE esta secuencia, en este orden, con estos nombres en inglés (son términos del CLI, no se traducen):



```

Proposal → Specs → Design → Tasks → Apply → Verify → Archive

```



\- Cada nodo: nombre de fase + un ícono simple de línea (documento / lista / engranaje / checklist / martillo / lupa / caja archivadora, en ese orden respectivamente).

\- Entre nodo y nodo: un indicador de "gate" (rombo o candado) en `--sdd-warning` si está pendiente, `--sdd-accent` si fue aprobado.

\- Esta misma representación (mismos íconos, mismo orden, mismos colores de gate) debe repetirse idéntica en slides, web y tríptico — es el elemento que da coherencia entre piezas.



\## 5. Tono de voz (aplica al copy de cualquier pieza)



\- Técnico y directo. Cero lenguaje de marketing inflado ("revoluciona", "the future of...").

\- Usar terminología real del proyecto: RFC 2119, Given/When/Then, gate, checkpoint, spec, apply, verify, archive — en inglés, tal como aparecen en el CLI.

\- Mensaje central que toda pieza debe transmitir en algún punto: \*"SDD CLI no ralentiza al agente de IA — le pone puertas de control donde el humano decide antes de que avance."\*

\- Estructura de contenido de cualquier pieza explicativa: 1) el problema (vibe-coding sin estructura), 2) el mecanismo (ciclo de 7 fases con gates), 3) la prueba (instalación en una línea, 8 entornos soportados, contrato de idioma español/inglés).



\## 6. Checklist antes de dar cualquier pieza por terminada



\- \[ ] Usa exactamente los tokens de color de la sección 1 (ninguno inventado).

\- \[ ] Tipografía monospace para comandos/wordmark, sans-serif para texto — sin una tercera fuente.

\- \[ ] El ciclo de 7 fases aparece con el mismo orden, íconos y colores de gate que en la sección 4.

\- \[ ] El logo (si aparece) es una de las dos variantes definidas en la sección 3, sin modificar el trazo.

\- \[ ] El tono sigue la sección 5 (sin lenguaje de marketing inflado).

