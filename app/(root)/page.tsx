import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Andre', lastName:'HEHE',email:'testing@gmail.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and message your account and transactions" 
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50 },{currentBalance:500.50}]}
      />
    </section>
  )
}

export default Home
