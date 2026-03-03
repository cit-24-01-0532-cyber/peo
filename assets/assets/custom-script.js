function openPopup(title) {
    const modal = document.getElementById('quick-popup');
    const body = document.getElementById('modal-body');
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);


    body.innerHTML = `
        <div class="popup-container" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <h2 style="color: #333; margin-bottom: 15px;">${title} Details</h2>
            <hr style="width: 80px; border: 2px solid #8b4513; margin-bottom: 25px;">

            <div class="product-image-zoom-container" style="width: 100%; max-width: 400px; height: 300px; overflow: hidden; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); margin-bottom: 25px; display: flex; align-items: center; justify-content: center;">
                <img src="https://images.unsplash.com/photo-1590732487832-7fa257731727?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Wood Mask" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; transform: scale(1.3);">
            </div>

            <div class="action-container" style="width: 100%;">
                <p style="color: #555; margin-bottom: 20px;">Explore our collection of traditional, handcrafted wood masks.</p>
                <button style="background: #8b4513; color: white; border: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; cursor: pointer; transition: background 0.3s ease; box-shadow: 0 3px 6px rgba(0,0,0,0.1);">
                    View Full Collection
                </button>
            </div>
        </div>
    `;
}

function closePopup() {
    const modal = document.getElementById('quick-popup');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
}