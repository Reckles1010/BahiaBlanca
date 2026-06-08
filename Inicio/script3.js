  const sections = [
            {
                id: 0, icon: "🛡", title: "Normas Generales",
                desc: "Reglas fundamentales que aplican a todos los jugadores en todo momento.",
                rules: [
                    { id: "§1.1", title: "Respeto entre jugadores", severity: "grave", severityLabel: "GRAVE",
                      text: "Está prohibido el uso de lenguaje ofensivo, discriminatorio, racista, sexista o cualquier forma de acoso hacia otros jugadores, ya sea en el chat, por voz o por cualquier otro medio de comunicación dentro del servidor. El respeto mutuo es la base de nuestra comunidad." },
                    { id: "§1.2", title: "Identidad y cuentas", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Cada jugador puede tener una única cuenta activa. El uso de múltiples cuentas para evadir sanciones, duplicar recursos o cualquier otro beneficio está estrictamente prohibido y conllevará baneo permanente de todas las cuentas." },
                    { id: "§1.3", title: "Uso de modificaciones", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Está prohibido el uso de modificaciones, hacks, cheats o cualquier tipo de programa externo que otorgue ventajas sobre otros jugadores. Únicamente se permiten mods visuales que no afecten la jugabilidad. Ante cualquier duda, consulta con el staff." },
                    { id: "§1.4", title: "Comportamiento fuera del juego", severity: "grave", severityLabel: "GRAVE",
                      text: "El comportamiento tóxico o dañino hacia la comunidad fuera del servidor (redes sociales, Discord, etc.) también puede ser sancionado si afecta la integridad del servidor o de sus miembros." },
                    { id: "§1.5", title: "Acatamiento de decisiones del Staff", severity: "grave", severityLabel: "GRAVE",
                      text: "Las decisiones tomadas por el equipo de administración son de obligatorio cumplimiento. Si no estás de acuerdo con una sanción, puedes apelarla por los canales oficiales, pero nunca ignorarla o enfrentarte al staff públicamente." }
                ]
            },
            {
                id: 1, icon: "👥", title: "Roleplay",
                desc: "Normas para mantener la calidad e inmersión del roleplay en el servidor.",
                rules: [
                    { id: "§2.1", title: "Metajuego (Metagaming)", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Queda prohibido utilizar información obtenida fuera del contexto del roleplay (streams, Discord, chats externos) para beneficiar a tu personaje dentro del juego. Toda información debe ser obtenida de forma IC (In Character)." },
                    { id: "§2.2", title: "Powergaming", severity: "grave", severityLabel: "GRAVE",
                      text: "Está prohibido realizar acciones que tu personaje no podría hacer de forma realista, forzar situaciones sin dar opción de respuesta al otro jugador, o abusar de mecánicas del juego para obtener ventaja en el roleplay." },
                    { id: "§2.3", title: "Valor de vida (Fear RP)", severity: "grave", severityLabel: "GRAVE",
                      text: "Todo jugador debe valorar la vida de su personaje. Si te encuentras en una situación de clara desventaja debes actuar con miedo realista y no de forma heroica o suicida." },
                    { id: "§2.4", title: "Ruptura de personaje (Breaking Character)", severity: "leve",
                      text: "No está permitido salir del personaje durante situaciones de roleplay activo. Si necesitas comunicarte OOC usa los canales designados para ello. Solo se permite en emergencias reales o con permiso del staff." },
                    { id: "§2.5", title: "CombatLog", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Está terminantemente prohibido desconectarse del servidor para evitar consecuencias de una situación de roleplay, combate o detención. Hacerlo resultará en sanción inmediata." },
                    { id: "§2.6", title: "Zonas seguras", severity: "grave", severityLabel: "GRAVE",
                      text: "Las zonas seguras designadas son intocables para cualquier tipo de acción violenta o criminal. Está prohibido iniciar o continuar persecuciones, robos o enfrentamientos dentro de estas áreas." },
                    { id: "§2.7", title: "Roleplay de muerte (RDM/VDM)", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Matar a otro jugador sin razón válida de roleplay (RDM) o utilizar vehículos como armas sin justificación narrativa (VDM) está estrictamente prohibido y conllevará sanciones severas." }
                ]
            },
            {
                id: 2, icon: "🏛", title: "Organizaciones & Bandas",
                desc: "Reglas específicas para el funcionamiento de organizaciones criminales y legales.",
                rules: [
                    { id: "§3.1", title: "Registro de organizaciones", severity: "grave", severityLabel: "GRAVE",
                      text: "Toda organización, banda o grupo criminal debe estar debidamente registrada ante la administración del servidor. Operar como grupo organizado sin registro previo está prohibido." },
                    { id: "§3.2", title: "Límite de miembros", severity: "leve", severityLabel: "LEVE",
                      text: "Cada organización tiene un límite máximo de miembros activos definido por el staff. Superar este límite sin autorización expresa conllevará sanciones para los líderes de la organización." },
                    { id: "§3.3", title: "Guerras entre organizaciones", severity: "grave", severityLabel: "GRAVE",
                      text: "Los conflictos armados entre organizaciones deben tener una causa IC justificada y declarada previamente. No se permiten guerras espontáneas sin contexto narrativo. El staff debe ser notificado antes de iniciar hostilidades formales." },
                    { id: "§3.4", title: "Conducta interna", severity: "leve", severityLabel: "LEVE",
                      text: "Los líderes de cada organización son responsables del comportamiento de sus miembros. Faltas graves o repetidas de los integrantes pueden derivar en sanciones hacia la organización en conjunto, incluyendo su disolución." }
                ]
            },
            {
                id: 3, icon: "💲", title: "Economía & Trabajos",
                desc: "Normativa sobre el uso del sistema económico y los trabajos disponibles.",
                rules: [
                    { id: "§4.1", title: "Explotación de bugs económicos", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Está absolutamente prohibido explotar cualquier error o bug del sistema económico para generar dinero de forma ilegítima. Si encuentras un fallo, debes reportarlo al staff inmediatamente." },
                    { id: "§4.2", title: "Transferencias y comercio", severity: "leve", severityLabel: "LEVE",
                      text: "Todas las transacciones entre jugadores deben tener un contexto IC válido. El intercambio de bienes o dinero sin justificación roleplay puede considerarse conducta sospechosa y ser investigada por el staff." },
                    { id: "§4.3", title: "Trabajos ilegales", severity: "grave", severityLabel: "GRAVE",
                      text: "Las actividades económicas ilegales deben desarrollarse siempre dentro del marco del roleplay. No está permitido realizarlas de forma mecánica o repetitiva sin el componente narrativo correspondiente." }
                ]
            },
            {
                id: 4, icon: "⭐", title: "Policía & Servicios de Emergencia",
                desc: "Normas para los jugadores que forman parte de cuerpos de seguridad y emergencias.",
                rules: [
                    { id: "§5.1", title: "Conducta policial", severity: "grave", severityLabel: "GRAVE",
                      text: "Los jugadores que ejercen roles policiales deben mantener en todo momento un comportamiento acorde a su cargo. El abuso de autoridad o la colaboración con criminales fuera de contexto RP están prohibidos." },
                    { id: "§5.2", title: "Uso de fuerza", severity: "grave", severityLabel: "GRAVE",
                      text: "El uso de la fuerza debe ser siempre proporcional a la situación. Disparar sin advertencia previa o eliminar sospechosos sin causa justificada será considerado abuso y sancionado." },
                    { id: "§5.3", title: "Servicios médicos", severity: "leve", severityLabel: "LEVE",
                      text: "Los servicios médicos de emergencia deben atender a todos los jugadores sin discriminación IC injustificada. Usar el rol médico para beneficiar a facciones específicas sin justificación narrativa está prohibido." }
                ]
            },
            {
                id: 5, icon: "⚠", title: "Sistema de Sanciones",
                desc: "Procedimiento y escala de sanciones aplicadas por el equipo de administración.",
                rules: [
                    { id: "§6.1", title: "Escala de sanciones", severity: "leve", severityLabel: "LEVE",
                      text: "Las sanciones se aplican de forma progresiva: advertencia verbal, kick, ban temporal (24h-7 días) y ban permanente. La gravedad de la infracción puede saltarse pasos en la escala a criterio del staff." },
                    { id: "§6.2", title: "Proceso de apelación", severity: "leve", severityLabel: "LEVE",
                      text: "Todo jugador sancionado tiene derecho a apelar su sanción a través de los canales oficiales del servidor (Discord - ticket de apelación). Las apelaciones deben presentarse con argumentos fundados y evidencias si las hubiere." },
                    { id: "§6.3", title: "Sanciones inmediatas", severity: "muy-grave", severityLabel: "MUY GRAVE",
                      text: "Ciertas infracciones muy graves como el uso de hacks, RDM masivo o acoso grave resultarán en ban permanente inmediato sin posibilidad de apelación." },
                    { id: "§6.4", title: "Reincidencia", severity: "grave", severityLabel: "GRAVE",
                      text: "La reincidencia en cualquier tipo de infracción agrava automáticamente la sanción aplicada. Un jugador con historial de sanciones repetidas puede ser baneado permanentemente aunque la infracción individual fuera considerada leve." }
                ]
            }
        ];

        /* ── Nav ── */
        function buildNav() {
            document.getElementById("navSections").innerHTML = sections.map((s, i) => `
                <div class="nav-item ${i === 0 ? 'active' : ''}" data-section="${s.id}" onclick="navigateTo(${s.id})">
                    <div class="nav-icon">${s.icon}</div>
                    <div class="nav-item-info">
                        <div class="nav-item-title">${s.title.length > 22 ? s.title.slice(0,22)+'…' : s.title}</div>
                        <div class="nav-item-count">${s.rules.length} normas</div>
                    </div>
                    <div class="nav-item-number">${String(i+1).padStart(2,'0')}</div>
                </div>
            `).join("");
        }

        /* ── Helpers ── */
        function esc(str) {
            return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        }

        function highlight(text, q) {
            if (!q) return esc(text);
            const safe = esc(text);
            const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
            return safe.replace(re, '<span class="highlight">$1</span>');
        }

        /* ── Render ──*/
        function renderContent(filter = "") {
            const container = document.getElementById("contentArea");
            container.innerHTML = "";
            let any = false;

            sections.forEach(section => {
                const filtered = filter
                    ? section.rules.filter(r =>
                        r.title.toLowerCase().includes(filter.toLowerCase()) ||
                        r.text.toLowerCase().includes(filter.toLowerCase()) ||
                        r.id.toLowerCase().includes(filter.toLowerCase()))
                    : section.rules;

                if (filter && filtered.length === 0) return;
                any = true;

                /* Normas dentro de la caja grande */
                const rulesHTML = filtered.map(rule => `
                    <div class="rule-card">
                        <div class="rule-top">
                            <span class="rule-id">${rule.id}</span>
                            <span class="rule-title">${highlight(rule.title, filter)}</span>
                            <span class="severity-tag ${rule.severity}">
                                ${rule.severityLabel}
                            </span>
                        </div>
                        <div class="rule-divider"></div>
                        <div class="rule-body">
                            <div class="rule-border-line"></div>
                            <p class="rule-text">${highlight(rule.text, filter)}</p>
                        </div>
                    </div>
                `).join("");

                /* Caja grande con header + normas dentro */
                const box = document.createElement("div");
                box.className = "section-box";
                box.id = "section-" + section.id;
                box.innerHTML = `
                    <div class="section-box-header">
                        <div class="section-icon-wrap">${section.icon}</div>
                        <div class="section-info">
                            <div class="section-name">${section.title}</div>
                            <div class="section-desc">${section.desc}</div>
                        </div>
                        <div class="section-norm-count">${filtered.length}/${section.rules.length} normas</div>
                    </div>
                    <div class="rules-list">
                        ${rulesHTML}
                    </div>
                `;
                container.appendChild(box);
            });

            if (!any) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🔍</div>
                        <p>No se encontraron normas para <strong>"${esc(filter)}"</strong></p>
                    </div>`;
            }
        }

        /* ── Navegación ────────────────────────────── */
        function navigateTo(id) {
            setActive(id);
            const el = document.getElementById("section-" + id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        function setActive(id) {
            document.querySelectorAll(".nav-item").forEach(n =>
                n.classList.toggle("active", parseInt(n.dataset.section) === id));
        }

        /* ── Scroll spy ────────────────────────────── */
        document.getElementById("mainContent").addEventListener("scroll", function () {
            const top = this.scrollTop + 180;
            let current = 0;
            sections.forEach(s => {
                const el = document.getElementById("section-" + s.id);
                if (el && el.offsetTop <= top) current = s.id;
            });
            setActive(current);
        });

        /* ── Búsqueda ──────────────────────────────── */
        document.getElementById("searchInput").addEventListener("input", function () {
            renderContent(this.value.trim());
        });

        /* ── Init ──────────────────────────────────── */
        buildNav();
        renderContent();