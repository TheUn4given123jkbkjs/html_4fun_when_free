const scenesData = [
    // --- SCENE 1: Bên ngoài nhà thuốc ---
    {
        
        id: 0,
        bg: '', // Không cần hình nền, sẽ tự thành màu đen
        dialogues: [
            { speaker: 'DẪN CHUYỆN', text: 'Vào một hôm mưa nọ...' }
        ]
        ,
        id: 1,
        bg: 'assets/imgs/scene1.png',
        dialogues: [
            { speaker: 'DẪN CHUYỆN', text: 'Mưa bão bao trùm con hẻm nhỏ...' },
            { speaker: 'DẪN CHUYỆN', text: 'Tiếng chuông gió trước cửa nhà thuốc vang lên nhẹ nhàng.' }
        ]
    },

    // --- SCENE 2: Bên trong nhà thuốc (??? & Thiện) ---
    {
        id: 2,
        bg: 'assets/imgs/scene2.png',
        dialogues: [
            // Em chỉ cần thay đổi/thêm bớt các câu thoại ở đây:
            { speaker: 'THIỆN', text: '(Vẫn bấm điện thoại, không ngẩng đầu lên) Cửa không khóa, lấy thuốc gì thì nói đi...' },
            { speaker: 'THIỆN', text: '(Gõ tin nhắn) Em ăn gì chưa? Anh đặc đồ cho em nhe' },
            { speaker: 'TRUN', text: '(Tin nhắn) Em chưa. Em đang đi mua thuốc ròi, đợi em xíu nha' },
            { speaker: 'THIỆN', text: '(Gõ tin nhắn) Thế em đi cẩn thận nhe' },
            { speaker: 'THIỆN', text: 'Đêm bão thế này, chắc nay lại dẹp sớm rồi.'},
            { speaker: '???', text:'Anh ơi, lấy cho em vỉ magne b6...'}
        ]
    },
    // Scene3
    {
        id: 3,
        bg: 'assets/imgs/scene3.png',
        dialogues: [
            { speaker: 'THIỆN', text: '(Bỏ điện thoại xuống, ngẩn đầu lên) Giọng quen quen ấy nhỉ?' },
            { speaker: 'THIỆN', text: '...' }

        ]
    },
    {
        id: 4,
        bg: 'assets/imgs/scene4.png',
        dialogues: [
            { speaker: 'TRUN', text:'Bất ngờ chưa, em đi mua thuốc nèe'},
            { speaker: 'THIỆN', text: 'Em ở đâu ra đây' },
            { speaker: 'THIỆN', text: '...?' }

        ]

    }
];

// Quản lý chỉ số Phân cảnh & Thoại
let currentSceneIndex = 0;
let currentDialogueIndex = 0;
let isEnded = false;

function updateDialogueDisplay() {
    if (isEnded) return;

    const currentScene = scenesData[currentSceneIndex];
    const currentDialogue = currentScene.dialogues[currentDialogueIndex];

    const screen = document.getElementById('cinemaScreen');
    const speakerEl = document.getElementById('speakerName');
    const textEl = document.getElementById('dialogueText');

    // Nếu không có bg (như Scene 0), để màu nền đen
    if (currentScene.bg) {
        screen.style.backgroundImage = `url('${currentScene.bg}')`;
    } else {
        screen.style.backgroundImage = 'none';
        screen.style.backgroundColor = '#000000';
    }

    speakerEl.innerText = currentDialogue.speaker;
    textEl.innerText = currentDialogue.text;

    // Đổi màu tên nhân vật
    if (currentDialogue.speaker === 'THIỆN') {
        speakerEl.style.color = '#63b3ed';
    } else if (currentDialogue.speaker === 'TRUN') {
        speakerEl.style.color = '#f6ad55';
    } else {
        speakerEl.style.color = '#cbd5e0';
    }
}

function showEndScreen() {
    isEnded = true;
    const screen = document.getElementById('cinemaScreen');
    
    // Thay toàn bộ nội dung khung hình thành màn hình END màu đen
    screen.innerHTML = `
        <div style="
            width: 100%; 
            height: 100%; 
            background-color: #000; 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            animation: fadeIn 2s forwards;
            z-index: 100;
        ">
            <h1 style="font-size: 36px; letter-spacing: 4px; color: #fff; margin-bottom: 10px;">THE END</h1>
            <p style="font-size: 14px; color: #888;">Cảm ơn đã xem em làm trò khùm trong lúc rảnh =3=</p>
            <button onclick="location.reload()" style="
                margin-top: 25px;
                padding: 8px 18px;
                background: transparent;
                border: 1px solid #555;
                color: #ccc;
                border-radius: 4px;
                cursor: pointer;
            ">Xem lại từ đầu</button>
        </div>
    `;
}

function nextDialogue() {
    if (isEnded) return;

    const currentScene = scenesData[currentSceneIndex];

    // Chuyển sang câu thoại tiếp theo trong cùng Scene
    if (currentDialogueIndex < currentScene.dialogues.length - 1) {
        currentDialogueIndex++;
        updateDialogueDisplay();
    } else {
        // Nếu đã hết thoại của Scene này -> Chuyển sang Scene tiếp theo
        if (currentSceneIndex < scenesData.length - 1) {
            currentSceneIndex++;
            currentDialogueIndex = 0;
            updateDialogueDisplay();
        } else {
            // Đã hết cả 4 Scene -> Hiện màn hình END
            showEndScreen();
        }
    }
}