<template>
  <main>
    <h1>Dein Heim, deine App</h1>
    <p>verlier nie den Überblick über euren Haushalt</p>
    <div class="container">
      <section id="shoppinglist">
        <h2>Einkaufsliste</h2>
        <ul>
          <li class="shoppinglist__item form">
            <input type="text" name="" id="" class="shoppinglist__item-text" placeholder="Eier" />
            <div class="shoppinglist__item-btn">
              <i class="bx bx-cart-add"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Eier</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Milch</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Honig</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Butter</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Brot</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
          <li class="shoppinglist__item">
            <p class="shoppinglist__item-text">Tomaten</p>
            <div class="shoppinglist__item-btn">
              <i class="bx bx-x-circle"></i>
              <i class="bx bx-cart-download"></i>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div class="container">
      <section id="receipts">
        <h2>Quittungen</h2>
        <form action="" class="receipts__form">
          <select name="" id="">
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
          </select>
          <div class="receipts__amount">
            <input type="number" placeholder="12,56" name="amount" id="amount" />
            <label for="amount">€</label>
          </div>
          <input type="text" placeholder="Wofür hast du das Geld ausgegeben?" />
          <i class="bx bx-plus-circle"></i>
        </form>
      </section>
    </div>
    <div class="container">
      <section id="todo">
        <h2>anstehende Aufgaben</h2>
        <ul>
          <li class="todolist__item">
            <p class="todolist__item-text">Küche putzen</p>
            <p class="todolist__item-date">fällig am: 14.4.2023</p>
            <div class="todolist__item-btn">
              <input type="checkbox" name="todo-done" erledigtid="todo-done" erledigt />
            </div>
          </li>
          <li class="todolist__item">
            <p class="todolist__item-text">Planzen umtopfen</p>
            <p class="todolist__item-date">fällig am: 28.3.2023</p>
            <div class="todolist__item-btn">
              <input type="checkbox" name="todo-done" erledigtid="todo-done" erledigt />
            </div>
          </li>
          <li class="todolist__item">
            <p class="todolist__item-text">Glühbirne für Alibert kaufen</p>
            <p class="todolist__item-date">fällig am: 21.3.2023</p>
            <div class="todolist__item-btn">
              <input type="checkbox" name="todo-done" erledigtid="todo-done" erledigt />
            </div>
          </li>
          <li class="todolist__item">
            <p class="todolist__item-text">Keller ausmisten</p>
            <p class="todolist__item-date">fällig am: 25.5.2023</p>
            <div class="todolist__item-btn">
              <input type="checkbox" name="todo-done" erledigtid="todo-done" erledigt />
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
<script setup></script>
