// Constants
const seatPrice = 550;
const maxSelectableSeats = 4;
        function scrollToSection() {
            document.getElementById('seat-booking').scrollIntoView({ behavior: 'smooth' });
        }

// Select all seat elements
const seatElements = document.querySelectorAll('.seat');
const totalPriceElement = document.querySelectorAll('ol')[7]; // Grand Total
const selectedSeatsList = document.querySelector('.seat-booking .seat-sel');

// Track selected seats
let selectedSeats = [];

seatElements.forEach(seat => {
  seat.addEventListener('click', function() {
    const seatNumber = seat.textContent;
    if (selectedSeats.includes(seatNumber)) {
      // Deselect seat
      selectedSeats = selectedSeats.filter(s => s !== seatNumber);
      seat.style.backgroundColor = 'white';
    } else {
      if (selectedSeats.length < maxSelectableSeats) {
        // Select seat
        selectedSeats.push(seatNumber);
        seat.style.backgroundColor = '#4ade80'; // Tailwind green-400
      } else {
        alert(`You can select up to ${maxSelectableSeats} seats only.`);
      }
    }
    updateTotal();
  });
});

function updateTotal() {
  // Update price display
  const total = selectedSeats.length * seatPrice;
  totalPriceElement.textContent = `BDT ${total}`;
}