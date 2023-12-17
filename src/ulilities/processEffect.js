// Funkcja do przetwarzania wartości 'effect'
const processEffect = (effect) => {
    switch (effect) {
      case 'ionizing01Sv':
        return "Promieniowanie Jonizujące 0.1Sv";
        case 'ionizing1Sv':
          return "Promieniowanie Jonizujące 1Sv";
        case 'ionizing6Sv':
          return "Promieniowanie Jonizujące 6Sv";
        case 'ionizing20Sv':
          return "Promieniowanie Jonizujące 20Sv";
        case 'overpressure1psi':
          return "Fala Uderzeniowa 1psi";
        case 'overpressure5psi':
          return "Fala Uderzeniowa 5psi";
        case 'overpressure20psi':
          return "Fala Uderzeniowa 20psi";
        case 'overpressure200psi':
          return "Fala Uderzeniowa 200psi";
        case 'overpressure3000psi':
          return "Fala Uderzeniowa 3000psi";
        case 'Pierwszego':
          return "Oparzenia Pierwszego Stopnia";
        case 'Drugiego':
          return "Oparzenia Drugiego Stopnia";
        case 'Trzeciego':
          return "Oparzenia Trzeciego Stopnia";
        case 'fireball':
          return "Kula Ognia"; 
      default:
        return effect;
    }
}
    export default processEffect;