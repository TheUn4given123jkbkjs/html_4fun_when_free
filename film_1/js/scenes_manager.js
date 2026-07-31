const scenesData = [
    {
        id: 1,
        bg: 'assets/imgs/scene1.png',
        speaker: 'DẪN CHUYỆN',
        text: 'Mưa bão bao trùm con hẻm nhỏ... (Click vào khung thoại để tiếp tục)'
    },
    {
        id: 2,
        bg: 'assets/imgs/scene2.png', // Sẵn sàng cho Cảnh 2 khi bạn vẽ xong!
        speaker: 'DẪN CHUYỆN',
        text: 'Bước chân dừng lại trước tấm biển Nhà Thuốc Đức Thiện...'
    }
];

let currentSceneIndex = 0;

function loadScene(index) {
    if (index >= scenesData.length) {
        console.log("Đã hết các phân cảnh hiện có!");
        return;
    }
    
    const scene = scenesData[index];
    const screen = document.getElementById('cinemaScreen');
    const speakerEl = document.getElementById('speakerName');
    const textEl = document.getElementById('dialogueText');

    // Đổi hình nền và nội dung thoại
    screen.style.backgroundImage = `url('${scene.bg}')`;
    speakerEl.innerText = scene.speaker;
    textEl.innerText = scene.text;
}