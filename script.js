document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mediaCreatorForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        analyzeAndDisplayResult();
    });

    function analyzeAndDisplayResult() {
        // 獲取表單數據
        const mediaType = document.getElementById('mediaType').value;
        const experience = document.getElementById('experience').value;
        const topic = document.getElementById('topic').value;
        const timeCommitment = document.getElementById('timeCommitment').value;
        const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(el => el.value);
        const equipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);
        const aiAttitude = document.getElementById('aiAttitude').value;
        const goal = document.getElementById('goal').value;
        const aiTools = Array.from(document.querySelectorAll('input[name="aiTools"]:checked')).map(el => el.value);

        // 分析數據並生成建議
        const analysis = generateAnalysis(mediaType, experience, topic, timeCommitment, skills, equipment, aiAttitude, goal, aiTools);

        // 顯示分析結果
        displayAnalysis(analysis);

        // 顯示結果區域
        result.style.display = 'block';
    }

    function generateAnalysis(mediaType, experience, topic, timeCommitment, skills, equipment, aiAttitude, goal, aiTools) {
        // 這裡是分析邏輯，根據用戶輸入生成建議
        // 為了簡潔，這裡只提供一個基本框架，你可以根據需要擴展這個函數

        return {
            mediaTypeAnalysis: `您選擇了${mediaType}創作，專注於${topic}主題。這是一個很好的組合，因為...`,
            specificArea: `建議您可以專注於${topic}中的某個細分領域，例如...`,
            researchCreators: `研究成功的${mediaType}創作者，分析他們的內容結構和呈現方式`,
            contentPlan: `制定一個月度內容計劃，包括每週至少發布${timeCommitment === 'fullTime' ? '5' : '2'}個視頻`,
            skillsPlan: generateSkillsPlan(skills, mediaType),
            equipmentSuggestions: generateEquipmentSuggestions(equipment, mediaType),
            aiStrategy: generateAIStrategy(aiAttitude, aiTools, mediaType),
            careerAdvice: generateCareerAdvice(goal, experience),
            learningPlan: generateLearningPlan(skills, mediaType),
            actionPlan: generateActionPlan(mediaType, experience, goal)
        };
    }

    function generateSkillsPlan(skills, mediaType) {
        // 根據選擇的技能和媒體類型生成技能提升計劃
        // 這裡只是一個示例，你可以根據實際需求擴展
        let plan = '';
        if (skills.includes('writing')) {
            plan += '<h4>文案寫作：</h4><ul>';
            plan += '<li>參加線上課程：[推薦具體課程]</li>';
            plan += '<li>每天練習寫作，從短視頻腳本開始</li>';
            plan += '<li>閱讀相關書籍：[推薦書籍]</li></ul>';
        }
        if (skills.includes('videoEditing')) {
            plan += '<h4>視頻拍攝與剪輯：</h4><ul>';
            plan += '<li>學習使用專業軟件：如 Adobe Premiere Pro</li>';
            plan += '<li>練習不同的拍攝技巧，如構圖、光線運用</li>';
            plan += '<li>每週完成一個小項目，如 1 分鐘的生活 Vlog</li></ul>';
        }
        return plan;
    }

    function generateEquipmentSuggestions(equipment, mediaType) {
        // 根據現有設備和媒體類型提供設備升級建議
        let suggestions = [];
        if (!equipment.includes('camera') && mediaType === 'video') {
            suggestions.push('考慮購入一台入門級的數碼相機，如 Sony ZV-1，適合 Vlog 拍攝');
        }
        if (!equipment.includes('microphone')) {
            suggestions.push('添置一個高質量的麥克風，如 Rode VideoMic Pro+，可以大幅提升音頻質量');
        }
        return suggestions;
    }

    function generateAIStrategy(aiAttitude, aiTools, mediaType) {
        // 根據 AI 態度和選擇的工具提供 AI 應用策略
        let strategy = `鑒於您對 AI 工具的${aiAttitude}態度，我們建議：<ul>`;
        if (aiTools.includes('chatgpt')) {
            strategy += '<li>使用 ChatGPT 協助生成內容創意和大綱</li>';
        }
        if (aiTools.includes('midjourney')) {
            strategy += '<li>利用 Midjourney 創作視覺素材，豐富您的內容</li>';
        }
        if (aiTools.includes('jianying')) {
            strategy += '<li>使用剪映進行快速的視頻編輯和後期製作</li>';
        }
        strategy += '</ul>';
        return strategy;
    }

    function generateCareerAdvice(goal, experience) {
        // 根據職業目標和經驗提供建議
        let advice = [];
        if (goal === 'fullTime') {
            advice.push('制定 6 個月的階段性目標，如達到 1 萬訂閱');
            advice.push('學習基本的財務管理，包括收入來源多元化');
            advice.push('研究自媒體變現方式，如廣告、贊助、課程銷售等');
        }
        if (experience === 'beginner') {
            advice.push('從小規模開始，逐步建立個人品牌');
            advice.push('多與其他創作者交流，學習經驗');
        }
        return advice;
    }

    function generateLearningPlan(skills, mediaType) {
        // 生成持續學習和評估計劃
        let plan = [
            '每週固定時間學習新技能，建議每天至少 1 小時',
            '每月進行一次自我評估，關注數據如觀看次數、訂閱增長等',
            '加入相關社群或論壇，與同行交流學習',
            '定期關注行業趨勢，訂閱相關 YouTube 頻道或播客'
        ];
        return plan;
    }

    function generateActionPlan(mediaType, experience, goal) {
        // 生成具體的行動計劃
        return {
            firstWeekTask: '創建您的第一個視頻內容並發布',
            firstMonthGoal: '建立穩定的內容發布節奏，每週至少一個視頻',
            threeMonthMilestone: '達到 1000 名訂閱者，並開始嘗試與其他創作者合作',
            sixMonthReview: '評估內容質量和觀眾反饋，調整內容策略'
        };
    }

    function displayAnalysis(analysis) {
        // 將分析結果顯示在頁面上
        document.getElementById('mediaTypeAnalysis').textContent = analysis.mediaTypeAnalysis;
        document.getElementById('specificArea').textContent = analysis.specificArea;
        document.getElementById('researchCreators').textContent = analysis.researchCreators;
        document.getElementById('contentPlan').textContent = analysis.contentPlan;
        document.getElementById('skillsPlan').innerHTML = analysis.skillsPlan;
        document.getElementById('equipmentSuggestions').innerHTML = analysis.equipmentSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
        document.getElementById('aiStrategy').innerHTML = analysis.aiStrategy;
        document.getElementById('careerAdvice').innerHTML = analysis.careerAdvice.map(advice => `<li>${advice}</li>`).join('');
        document.getElementById('learningPlan').innerHTML = analysis.learningPlan.map(item => `<li>${item}</li>`).join('');
        document.getElementById('firstWeekTask').textContent = analysis.actionPlan.firstWeekTask;
        document.getElementById('firstMonthGoal').textContent = analysis.actionPlan.firstMonthGoal;
        document.getElementById('threeMonthMilestone').textContent = analysis.actionPlan.threeMonthMilestone;
        document.getElementById('sixMonthReview').textContent = analysis.actionPlan.sixMonthReview;
    }
});