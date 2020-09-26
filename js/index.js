document.addEventListener("DOMContentLoaded", function(event) {
    
});
function redirect($url) {
    switch ($url) {
        case "rickandmorty":
            window.open('http://www.leonelmoyano.com/RickAndMortyAPI/', '_blank');
            break;
        case "controlpanel":
            window.open('http://www.leonelmoyano.com/controlpanel/cargar_pedidos.php', '_blank');
            break;
    }
}