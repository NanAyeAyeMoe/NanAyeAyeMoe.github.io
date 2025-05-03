// ဤနေရာတွင် JavaScript ကုဒ်များ ထည့်သွင်းနိုင်ပါသည်
document.addEventListener('DOMContentLoaded', function() {
    console.log('စာမျက်နှာ ပြည့်စုံစွာ ဖွင့်ပြီးပါပြီ။');
    
    // ဆပ်ပြာရည်ထုတ်လုပ်နည်း အဆင့်များကို အရောင်ဖြင့် ပြသခြင်း
    const steps = document.querySelectorAll('.steps li');
    steps.forEach((step, index) => {
        step.style.color = ['#e53935', '#d81b60', '#8e24aa', '#3949ab', '#039be5', '#00897b'][index];
    });
    
    // ချည်ထိုးပုံများကို နှိပ်လိုက်ပါက အသိပေးချက် ပြသခြင်း
    const crochetImages = document.querySelectorAll('.crochet-images img');
    crochetImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('ချည်ထိုးလုပ်ငန်းသည် ကျွန်မ၏ အကြိုက်ဆုံး ဝါသနာတစ်ခုဖြစ်ပါသည်။');
        });
    });
});
