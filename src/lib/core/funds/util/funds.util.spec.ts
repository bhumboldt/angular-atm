import { Funds } from '../models/funds.model';
import { withdrawFunds } from './funds.util';

describe('Funds Util', () => {
  describe('withdrawFunds', () => {
    it('should dispense correctly when asking for $100 and has sufficient funds', (done) => {
      const funds: Funds = {
        100: 1
      };
      const amountToWithdraw = 100;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        next: (dispensedFunds) => {
          expect(dispensedFunds).toEqual({
            100: 1
          });
          done();
        }
      })

    });

    it('should dispense correctly when asking for $42 and has sufficient funds', (done) => {
      const funds: Funds = {
        100: 1,
        50: 1,
        20: 2,
        1: 3
      };
      const amountToWithdraw = 42;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        next: (dispensedFunds) => {
          expect(dispensedFunds).toEqual({
            20: 2,
            1: 2
          });
          done();
        }
      })
    });

    it('should dispense correctly when asking for $183 and has sufficient funds', (done) => {
      const funds: Funds = {
        100: 1,
        50: 1,
        20: 1,
        10: 1,
        1: 3
      };
      const amountToWithdraw = 183;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        next: (dispensedFunds) => {
          expect(dispensedFunds).toEqual({
            100: 1,
            50: 1,
            20: 1,
            10: 1,
            1: 3
          });
          done();
        }
      })
    });

    it('should error when there are no funds', (done) => {
      const funds: Funds = {};
      const amountToWithdraw = 1;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        error: (err: string) => {
          expect(err).toContain('Insufficient');
          done();
        }
      })
    });

    it('should error when there are not enough funds to process the request', (done) => {
      const funds: Funds = {
        1: 3
      };
      const amountToWithdraw = 4;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        error: (err: string) => {
          expect(err).toContain('Insufficient');
          done();
        }
      })
    });

    it('should error when there are enough funds, but not correct bills to process the request', (done) => {
      const funds: Funds = {
        10: 1,
        5: 1
      };
      const amountToWithdraw = 14;

      withdrawFunds(amountToWithdraw, funds).subscribe({
        error: (err: string) => {
          expect(err).toContain('Insufficient');
          done();
        }
      })
    })
  })
})
