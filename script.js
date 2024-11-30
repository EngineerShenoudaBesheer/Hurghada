let selectedProject = '';

function askForPropertyType(projectName) {
    selectedProject = projectName;  // تخزين اسم المشروع الذي اختاره العميل
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.style.display = 'block'; // إظهار النافذة
    } else {
        console.log("Modal not found"); // إذا لم يتم العثور على العنصر
    }
}


function closeModal() {
    document.getElementById('propertyModal').style.display = 'none'; // إغلاق النافذة المنبثقة
}

function sendWhatsappWithType(propertyType) {
    const phoneNumber = '01044096035'; // رقم الهاتف الذي ستُرسل إليه الرسالة
    const message = `مرحباً، أريد معرفة المزيد عن ${selectedProject}. نوع العقار: ${propertyType}.\nمن فضلك، تواصل معي.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // فتح رابط واتساب مع الرسالة المحددة
    closeModal(); // إغلاق النافذة بعد إرسال الرسالة
}

function toggleDescription(button) {
    const projectElement = button.parentElement; // الحصول على العنصر الذي يحتوي على المشروع
    const description = projectElement.querySelector('.project-description'); // الحصول على الوصف
    
    // التبديل بين إظهار أو إخفاء الوصف
    description.classList.toggle('active');
}


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}





