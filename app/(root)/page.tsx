import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { Sidebar } from 'lucide-react'
import React from 'react'
type BankAccount = {
    currentBalance: number
}

const Home = () => {
    const loggedIn  = {firstName: 'Neeraj', lastName: 'Patil', email: 'patilneeraj2003@gmail.com'} as User;
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user = {loggedIn?.firstName || 'Guest'}
                    subtext = "Access and manage your account and transactions efficiently"
                />

                <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance={1250.35}
                />

            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 126.90}] as (Bank & Account)[]} 
        />
    </section>
  )
}

export default Home