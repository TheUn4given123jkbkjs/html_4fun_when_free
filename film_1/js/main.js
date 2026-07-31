document.addEventListener('DOMContentLoaded', () => {
    // Tải câu thoại đầu tiên
    updateDialogueDisplay();

    const dialogueBox = document.getElementById('dialogueBox');

    // Click vào khung thoại để đọc tiếp câu sau
    dialogueBox.addEventListener('click', () => {
        nextDialogue();
    });
});