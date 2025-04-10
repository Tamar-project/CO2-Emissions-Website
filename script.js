$(document).ready(function () {
    // Initialisierung der DataTable
    $('#emissionsTable').DataTable();

    // Ereignislistener für das Suchfeld der DataTable
    $('#emissionsTable_filter input').on('input', function () {
        // Holen des aktuellen Suchbegriffs
        var searchInput = $(this).val().trim();
        // Sicheren Suchbegriff generieren
        var safeSearch = escapeHTML(searchInput);
        // DataTable mit sicherem Suchbegriff aktualisieren
        $('#emissionsTable').DataTable().search(safeSearch).draw();
    });

    // Funktion zum Entschärfen von HTML-Inhalten
    function escapeHTML(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function (match) {
            return map[match];
        });
    }

    // Funktion zum Laden von Inhalten auf der Seite
    function loadContent(page) {
        const allowedPages = ['daten', 'kontakt', 'impressum', 'datenschutz'];  // Erlaubte Seiten
        if (allowedPages.includes(page)) {
            $('#content-area').load(page + '.html', function (response, status, xhr) {
                if (status === 'error') {
                    $('#content-area').html('<p>Fehler beim Laden des Inhalts: ' + xhr.status + ' ' + xhr.statusText + '</p>');
                }
            });
        } else {
            $('#content-area').html('<p>Unzulässige Seite.</p>');
        }
    }

    // Event-Listener für die Navigation
    $('#home-link').click(function () {
        $('#content-area').html(`
            <h2>CO2-Emissionsdaten | Tabelle (Unternehmen)</h2>
            <div class="table-responsive">
                <table id="emissionsTable" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Land</th>
                            <th>Unternehmen</th>
                            <th>CO2-Emissionen (in Tonnen)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Deutschland</td><td>BMW</td><td>200</td></tr>
                        <tr><td>USA</td><td>APPLE</td><td>500</td></tr>
                        <tr><td>China</td><td>ALIBABA GROUP</td><td>800</td></tr>
                        <tr><td>Frankreich</td><td>RENAULT</td><td>200</td></tr>
                        <tr><td>Spanien</td><td>BERSHKA</td><td>200</td></tr>
                        <tr><td>Schweiz</td><td>NÈSTLE</td><td>200</td></tr>
                        <tr><td>Kanada</td><td>SCOTIABANK</td><td>200</td></tr>
                        <tr><td>Holland</td><td>AIRBUS</td><td>200</td></tr>
                        <tr><td>Italien</td><td>BARILLA</td><td>200</td></tr>
                        <tr><td>Griechenland</td><td>ION</td><td>200</td></tr>
                        <tr><td>Deutschland</td><td>VW</td><td>200</td></tr>
                        <tr><td>USA</td><td>META</td><td>500</td></tr>
                        <tr><td>China</td><td>HUAWEI</td><td>800</td></tr>
                        <tr><td>Frankreich</td><td>TOTAL ENERGIES</td><td>200</td></tr>
                        <tr><td>Spanien</td><td>BBVA</td><td>200</td></tr>
                        <tr><td>Schweiz</td><td>NOVARTIS</td><td>200</td></tr>
                        <tr><td>Kanada</td><td>ENBRIDGE</td><td>200</td></tr>
                        <tr><td>Holland</td><td>PHILIPS</td><td>200</td></tr>
                        <tr><td>Italien</td><td>CAPRI</td><td>200</td></tr>
                        <tr><td>Griechenland</td><td>ALPHA BANK</td><td>200</td></tr>
                    </tbody>
                </table>
            </div>
        `);
        $('#emissionsTable').DataTable(); // Neu initialisieren, um sicherzustellen, dass die Tabelle funktioniert
    });

    // Ereignisse für andere Links
    $('#daten-link').click(function () {
        loadContent('daten');
    });

    $('#kontakt-link').click(function () {
        loadContent('kontakt');
    });

    $('#impressum-link').click(function () {
        loadContent('impressum');
    });

    $('#datenschutz-link').click(function () {
        loadContent('datenschutz');
    });

    // Startinhalt laden
    $('#home-link').click(); 
});
