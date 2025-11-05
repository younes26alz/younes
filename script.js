const inp = document.getElementById('inp');
const imageDivs = document.querySelectorAll('.image div');

async function getImage() {
    const button = document.querySelector('button');
    
    if (!inp.value.trim()) {
        alert("⚠️ الرجاء كتابة وصف للصورة أولاً");
        return;
    }

    button.textContent = 'جاري التوليد...';
    button.disabled = true;

    try {
        
        const prompt = encodeURIComponent(inp.value);
        const imageUrl = `https://image.pollinations.ai/prompt/${prompt}`;
        
        imageDivs[0].innerHTML = '';
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "AI Generated Image";
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '10px';
        imageDivs[0].appendChild(img);
        
        3
        img.onload = () => alert("✅ تم توليد الصورة بنجاح!");
        img.onerror = () => alert("❌ فشل في تحميل الصورة");
        
    } catch (error) {
        alert(`❌ ${error.message}`);
    } finally {
        button.textContent = 'Generate';
        button.disabled = false;
    }
}

document.querySelector('button').addEventListener('click', getImage);
inp.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') getImage();
});