import React from 'react';
import './SurveyPreferScent.css';

const options = [
    '가벼운', '상큼한', '산뜻한', '달콤함', '청량한', '강렬한', '시원한', '부드러운', '여성적인',
    '남성적인', '중성적인', '따뜻한', '시원한', '상쾌한', '깨끗한', '매혹적인', '성숙한', '활기찬'
];

const Survey = () => {
    return (
        <div className="surveypreferscent-page-container">
            <div className="survey-total-container">
                <div className="survey-title">선호하는 향을 고르세요.</div>
                <form>
                    <div className="checkbox-container">
                        {options.map((option, index) => (
                            <div className="checkbox-item" key={index}>
                                <input type="checkbox" id={option} name="flavors" value={option} />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
            <div className="survey-next_button">다음</div>
        </div>
    );
}

export default Survey;

