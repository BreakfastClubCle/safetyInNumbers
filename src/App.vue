<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>
