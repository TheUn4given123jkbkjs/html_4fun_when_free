document.addEventListener('DOMContentLoaded', () => {
    // Tải Scene 1 ban đầu
    loadScene(currentSceneIndex);

    const dialogueBox = document.getElementById('dialogueBox');

    // Click vào khung thoại để sang cảnh tiếp theo
    dialogueBox.addEventListener('click', () => {
        currentSceneIndex++;
        
        if (currentSceneIndex < scenesData.length) {
            loadScene(currentSceneIndex);
        } else {
            // Nếu bấm quá số cảnh hiện có, quay về Scene 1 hoặc thông báo
            currentSceneIndex = 0;
            loadScene(currentSceneIndex);
        }
    });
});