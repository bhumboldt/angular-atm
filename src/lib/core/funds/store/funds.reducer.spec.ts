import { FundsState, setNewStock, setWithdrawSucceededState } from './funds.reducer';
import { Funds } from '../models/funds.model';

describe('Funds Reducer', () => {
  describe('setNewStock', () => {
    it('should add to all existing funds if they are present', () => {
      const state: FundsState = {
        currentFunds: {
          100: 10,
          50: 10,
          20: 10,
          10: 10,
          5: 10,
          1: 10
        },
        withdrawals: []
      };

      const newStock = {
        100: 1,
        50: 1,
        20: 1,
        10: 1,
        5: 1,
        1: 1
      };

      const newState = setNewStock(state, { stock: newStock });

      expect(newState).toEqual({
        currentFunds: {
          100: 11,
          50: 11,
          20: 11,
          10: 11,
          5: 11,
          1: 11
        },
        withdrawals: []
      });
    });

    it('should add only existing funds present in new stock', () => {
      const state: FundsState = {
        currentFunds: {
          100: 10,
          50: 10,
        },
        withdrawals: []
      };

      const newStock = {
        50: 1,
      };

      const newState = setNewStock(state, { stock: newStock });

      expect(newState).toEqual({
        currentFunds: {
          100: 10,
          50: 11
        },
        withdrawals: []
      });
    });
  });

  describe('setWithdrawSucceededState', () => {
    it('should subtract from all available funds when all denominations are used and add a new transaction', () => {
      const state: FundsState = {
        currentFunds: {
          100: 10,
          50: 10,
        },
        withdrawals: []
      };

      const fundsDispensed: Partial<Funds> = {
        100: 3,
        50: 2,
      };
      const amount = 400;

      const newState = setWithdrawSucceededState(state, { amount, fundsDispensed });

      expect(newState.currentFunds).toEqual({
        100: 7,
        50: 8
      });
      expect(newState.withdrawals.length).toBe(1);
    });

    it('should subtract only funds dispensed and add a new transaction a the beginning', () => {
      const state: FundsState = {
        currentFunds: {
          100: 10,
          50: 10,
        },
        withdrawals: [{ amountWithdrawn: 100, date: new Date() }]
      };

      const fundsDispensed: Partial<Funds> = {
        50: 1,
      };
      const amount = 50;

      const newState = setWithdrawSucceededState(state, { amount, fundsDispensed });

      expect(newState.currentFunds).toEqual({
        100: 10,
        50: 9
      });
      expect(newState.withdrawals.length).toBe(2);
      expect(newState.withdrawals[0].amountWithdrawn).toBe(50);
    })
  });
})
