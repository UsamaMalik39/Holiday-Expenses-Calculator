async function calculateExpenses(req, res) {
  let err = {};

  try {
    let expenses = req.body.expenses;

    // Merge individual expenses into unique participant objects
    const participants = expenses.reduce((acc, expense) => {
      const existingParticipant = acc.find((p) => p.name === expense.name);
      if (existingParticipant) {
        existingParticipant.amount += parseFloat(expense.amount);
      } else {
        acc.push({ name: expense.name, amount: parseFloat(expense.amount) });
      }
      return acc;
    }, []);

    // Calculate total expenses
    const total = participants.reduce(
      (sum, participant) => sum + participant.amount,
      0
    );

    // Calculate equal share
    const equalShare = total / participants.length;

    // Generate payouts
    const payouts = [];
    participants.forEach((payer) => {
      const amountOwed = payer.amount - equalShare;
      if (amountOwed > 0) {
        const otherParticipants = participants.filter(
          (p) => p.name !== payer.name
        );
        let remainingAmount = amountOwed;
        otherParticipants.forEach((payee) => {
          const payoutAmount = Math.min(
            remainingAmount,
            equalShare - payee.amount
          );
          if (payoutAmount > 0) {
            payouts.push({
              owes: payer.name,
              owed: payee.name,
              amount: parseFloat(payoutAmount.toFixed(2)),
            });
            remainingAmount -= payoutAmount;
          }
        });
      }
    });

    // Create the final result object
    const result = {
      total: parseFloat(total.toFixed(2)),
      equalShare: parseFloat(equalShare.toFixed(2)),
      payouts: payouts,
    };

    return res.status(200).json({ error: false, message: "", data: result });
  } catch (error) {
    err.statusCode = 400;
    err.message = "Error occurred in PAYOUT API";
    err.stackTrace = error;
  }
}

module.exports.calculateExpenses = calculateExpenses;
