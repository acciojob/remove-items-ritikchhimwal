document.querySelector('input[type="button"]').addEventListener('click', () => {
    const colorSelect = document.getElementById("colorSelect");
    const selectedIndex = colorSelect.selectedIndex;

    // Remove the selected option if an item is selected
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
});
