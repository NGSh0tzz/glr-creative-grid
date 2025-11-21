const gridContainer = document.getElementById('grid-container');
const statusSpan = document.getElementById('status');

async function loadGrid() {
    gridContainer.innerHTML = ''; // Grid schoonmaken voor de zekerheid
    
    try {
        // 1. Haal de lijst op (Lokaal bestand of Server bestand)
        const listResponse = await fetch('filelist.txt');
        
        if (!listResponse.ok) {
            // Dit gebeurt als ze lokaal het script nog niet gedraaid hebben
            throw new Error("Geen filelist gevonden.");
        }

        const text = await listResponse.text();
        // Filter lege regels en rare bestanden eruit
        const files = text.split('\n').filter(name => name.trim() !== '' && name.endsWith('.html'));
        
        // Check of de lijst niet leeg is (bijv. als ze script draaien in lege map)
        if (files.length === 0) {
            throw new Error("Lijst is leeg.");
        }

        // 2. Bouw het grid
        let loadedCount = 0;
        for (const fileName of files) {
            const cleanName = fileName.trim(); // Verwijder eventuele spaties/newlines
            const studentId = cleanName.replace('.html', '');
            
            const tileWrapper = document.createElement('div');
            tileWrapper.className = 'tile-wrapper';
            
            // Click = Bioscoopmodus (Fullscreen interactie)
            tileWrapper.addEventListener('click', () => {
                // Sluit eventuele andere open tegels
                document.querySelectorAll('.fullscreen').forEach(el => {
                    if (el !== tileWrapper) el.classList.remove('fullscreen');
                });
                // Toggle deze
                tileWrapper.classList.toggle('fullscreen');
            });

            try {
                const response = await fetch(`tiles/${cleanName}`);
                if (response.ok) {
                    const htmlContent = await response.text();
                    // Shadow DOM zorgt dat CSS van student A niet lekt naar student B
                    const shadow = tileWrapper.attachShadow({mode: 'open'});
                    shadow.innerHTML = htmlContent;
                    loadedCount++;
                } else {
                    tileWrapper.innerHTML = `<div class="error-tile">404<br>${studentId}</div>`;
                }
            } catch (error) {
                console.error(`Fout bij laden ${cleanName}:`, error);
                tileWrapper.innerHTML = `<div class="error-tile">Error</div>`;
            }
            gridContainer.appendChild(tileWrapper);
        }
        
        statusSpan.innerText = `${loadedCount} Developers Online`;

    } catch (error) {
        // 3. Foutafhandeling: Instructie tonen als filelist ontbreekt
        statusSpan.innerText = "Local Mode";
        
        gridContainer.innerHTML = `
            <div style="color: #aaa; text-align: center; grid-column: 1/-1; padding-top: 60px; font-family: sans-serif;">
                <h2 style="color: #ff4444; margin-bottom: 10px;">⚠️ Geen tegels gevonden</h2>
                <p>Ben je lokaal aan het testen? De website weet nog niet welke bestanden er zijn.</p>
                
                <p style="margin-top: 20px;">Draai dit commando in je VS Code Terminal:</p>
                <code style="background: #333; color: #00ff88; padding: 15px 20px; display: inline-block; border-radius: 6px; font-family: monospace; font-size: 1.2em; border: 1px solid #555;">./generate-list.sh</code>
                
                <p style="font-size: 0.9em; margin-top: 30px; opacity: 0.7;">(Ververs daarna deze pagina)</p>
            </div>
        `;
        console.log("Tip voor de developer: Draai ./generate-list.sh om filelist.txt te genereren.");
    }
}

// Start de motor
loadGrid();