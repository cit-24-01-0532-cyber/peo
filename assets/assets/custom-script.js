function openPopup(title) {
    const modal = document.getElementById('quick-popup');
    const body = document.getElementById('modal-body');
    
    modal.style.display = 'flex';
    setTimeout(() => { modal.classList.add('active'); }, 10);

    // මෙතන තියෙන්නේ සරල item විස්තර විතරයි
    body.innerHTML = `
        <h2 style="color:#333;">${title}</h2>
        <hr style="width:50px; border:2px solid #8b4513;">
        <div style="margin-top:20px; color:#555;">
            <div style="background:#f4f4f4; padding:20px; border-radius:10px;">
                <p>Sample Item From ${title}</p>
                <p><strong>Price: 7,500 LKR</strong></p>
            </div>
        </div>
    `;
}

function closePopup() {
    const modal = document.getElementById('quick-popup');
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 400);
}