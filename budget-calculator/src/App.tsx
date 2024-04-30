import {ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useState} from 'react'
import styles from './App.module.css';

export default function App() {
    const [form, setForm] = useState({
        budgetTitle: '',
        amount: '',
    });
    const [budgetList, setBudgetList] = useState<{
        budgetTitle: string, amount: string
    }[]>([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [budgetItemIndex, setBudgetItemIndex] = useState(-1);

    const addBudgetItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.budgetTitle === '') {
            alert('지출 항목을 입력해주세요!');
            return false;
        }
        if (form.amount === '') {
            alert('비용을 입력해주세요!');
            return false;
        }

        setBudgetList(prev => {
            return [
                ...prev,
                {
                    ...form
                }
            ]
        });

        setForm({
            budgetTitle: '',
            amount: '',
        });
    };

    const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        e.currentTarget.value = targetValue.replace(/^0+/, '');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    const updateBudgetItem = (targetIndex: number) => () => {
        const targetBudgetItem = budgetList.find((_, index) => index === targetIndex)!;
        setForm({
            budgetTitle: targetBudgetItem.budgetTitle,
            amount: targetBudgetItem.amount
        });
        setBudgetItemIndex(targetIndex);
        setIsUpdate(!isUpdate);
    };

    const removeBudgetItem = (targetIndex: number) => () => {
        setBudgetList(budgetList.filter((_, index) => index !== targetIndex));
    };

    const removeAllBudgetItem = () => {
        setBudgetList([]);
    };

    const handleUpdateClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (form.budgetTitle === '') {
            alert('지출 항목을 입력해주세요!');
            return false;
        }
        if (form.amount === '') {
            alert('비용을 입력해주세요!');
            return false;
        }

        setBudgetList(budgetList.map((item, index) => {
            if (index === budgetItemIndex) {
                return {
                    budgetTitle: form.budgetTitle,
                    amount: form.amount
                }
            }
            return item;
        }));

        setForm({
            budgetTitle: '',
            amount: '',
        });
        setIsUpdate(false);
        setBudgetItemIndex(-1);
    }

    return (
        <>
            <h2 className={styles.header}>
                예산 계산기
            </h2>
            <section>
                <form className={styles.budgetForm} onSubmit={addBudgetItem}>
                    <div className={styles.budgetFormInputs}>
                        <label className={styles.budgetInput}>
                            <span>지출 항목</span>
                            <input type='text' name='budgetTitle' onChange={handleChange} value={form.budgetTitle}/>
                        </label>
                        <label className={styles.budgetInput}>
                            <span>비용</span>
                            <input type='number' name='amount' min={1} onInput={handleInput} onChange={handleChange}
                                   value={form.amount}/>
                        </label>
                    </div>
                    {!isUpdate ?
                        <button type='submit' className={styles.budgetFormBtn}>
                            제출
                        </button> :
                        <button type='button' className={`${styles.budgetFormBtn} ${styles.budgetUpdate}` } onClick={handleUpdateClick}>
                            수정
                        </button>
                    }
                </form>
                <div className={styles.budgetList}>
                    {budgetList.length > 0 && budgetList.map((item, index) => {
                        return (
                            <div className={styles.budgetItem} key={item.budgetTitle}>
                                <p className={styles.budgetTitle}>{item.budgetTitle}</p>
                                <p className={styles.amount}>{item.amount}</p>
                                <div className={styles.itemButtons}>
                                    <button className={styles.update} onClick={updateBudgetItem(index)}>수정</button>
                                    <button className={styles.remove} onClick={removeBudgetItem(index)}>삭제</button>
                                </div>
                            </div>
                        )
                    })}
                    {budgetList.length > 0 &&
                        <button className={styles.removeBudgetList} onClick={removeAllBudgetItem}>
                            목록 지우기
                        </button>
                    }
                </div>
                <div>
                    {budgetList.length > 0 &&
                        <p>
                            총 지출: {budgetList.reduce((previousValue, currentValue) => {
                            return previousValue += +currentValue.amount;
                        }, 0).toLocaleString()}원
                        </p>
                    }
                </div>
            </section>
        </>
    )
}
