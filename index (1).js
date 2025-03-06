import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { faker } from "@faker-js/faker";

const Joval = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [receiver, setSender] = useState("");

  const generateTransaction = () => {
    const newTransaction = {
      id: faker.string.uuid(),
      sender: "Joval User",
      receiver: receiver || faker.internet.email(),
      amount: amount ? `$${amount}` : `$${faker.finance.amount(10, 1000, 2)}`,
      date: new Date().toLocaleString(),
      status: faker.helpers.arrayElement(["Completed", "Pending", "Failed"]),
    };

    setTransactions([newTransaction, ...transactions]);
    setAmount("");
    setReceiver("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Joval - PayPal Transactions</h1>
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Receiver Email"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Amount ($)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={generateTransaction}>Generate</Button>
          </div>
        </CardContent>
      </Card>

      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{tx.id.slice(0, 8)}</TableCell>
              <TableCell>{tx.sender}</TableCell>
              <TableCell>{tx.receiver}</TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Joval;
