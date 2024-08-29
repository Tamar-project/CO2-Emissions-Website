$(document).ready(function () {
    $('#emissionsTable').DataTable();

    function loadContent(page) {
        $('#content-area').load(page + '.html', function (response, status, xhr) {
            if (status === 'error') {
                $('#content-area').html('<p>Fehler beim Laden des Inhalts: ' + xhr.status + ' ' + xhr.statusText + '</p>');
            }
        });
    }

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
        $('#emissionsTable').DataTable();
    });

    $('#daten-link').click(function () {
        loadContent('daten');
    });

    $('#kontakt-link').click(function () {
        loadContent('kontakt');
    });

    $('#home-link').click(); // Initialer Inhalt
});
