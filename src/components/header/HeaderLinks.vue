<script setup>
    import { onMounted, ref } from "vue"

    const menu = ref(null)
    const burger = ref(null)


    onMounted(() => {

        const realMenu = menu.value
        const realBurger = burger.value

        function toggleMenu(display = 'inline-block'){
            realMenu.style.display = display
        }

        document.addEventListener("click", e => {
            let target = e.target;      
            do {
                if (target == realMenu || target == realBurger) return;
                target = target.parentNode;
            } while (target);
            toggleMenu('none')
        });

        function checkWindowWidth(){
            toggleMenu(window.innerWidth > 420 ? 'inline-block' : 'none')
        }

        checkWindowWidth()

        window.addEventListener('resize', e => {
            checkWindowWidth()
        })

        window.addEventListener('keyup', e => e.key == 'Escape' && toggleMenu('none'))

        realBurger.addEventListener('click', e => toggleMenu('block'))
    })
</script>

<template>
    <div class="links">
        <ul ref="menu">
            <li>
                <i class="bi file-earmark-check"></i><a href="./eula">EULA</a>
            </li>
            <li>
                <i class="bi image"></i><a href="./icons">Иконки</a>
            </li>
            <li>
                <i class="bi github"></i><a href="https://github.com/yababay/vite-vanilla-tailwind-svg"
                    target="_blank">Github</a>
            </li>
        </ul>
        <div class="burger-holder" ref="burger">
            <i class="bi list burger"></i>
        </div>
    </div>
</template>

<style>
    .burger-holder {
        cursor: pointer;
    }
</style>
