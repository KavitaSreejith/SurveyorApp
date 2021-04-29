import { isEmptyObj, floatToPercent, getAvarageRate } from './index'

test('isEmptyObj should works', () => {
    const emptyObj = {}
    const notEmptyObj = { id: 1 }

    expect(isEmptyObj(emptyObj)).toBeTruthy();
    expect(isEmptyObj(notEmptyObj)).toBeFalsy();
});


test('floatToPercent should properly', () => {
    const floatNumber = 0.333333

    expect(floatToPercent(floatNumber, 2)).toEqual('33.33%');
    expect(floatToPercent(floatNumber, 1)).toEqual('33.3%');
    expect(floatToPercent(floatNumber, 0)).toEqual('33%');
});



test('getAvarageRate should properly', () => {
    const allResponse = [
        {
            "id": 1,
            "question_id": 1,
            "respondent_id": 1,
            "response_content": "5"
        },
        {
            "id": 6,
            "question_id": 1,
            "respondent_id": 2,
            "response_content": "4"
        },
        {
            "id": 11,
            "question_id": 1,
            "respondent_id": 3,
            "response_content": "5"
        },
        {
            "id": 16,
            "question_id": 1,
            "respondent_id": 4,
            "response_content": "5"
        },
        {
            "id": 21,
            "question_id": 1,
            "respondent_id": 5,
            "response_content": "4"
        },
        {
            "id": 26,
            "question_id": 1,
            "respondent_id": 6,
            "response_content": ""
        }
    ]

    expect(getAvarageRate(allResponse, 'response_content')).toEqual(4.60);

});


