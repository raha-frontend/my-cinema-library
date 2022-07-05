<template>
	<div class="signin-page">
    <div class="signin-page__inner">
      <div class="signin-page__logo">
        My-cinema-library
      </div>

      <q-form
        ref="form"
        :model="formModel"
        :rules="rules"
        @submit.prevent="handleFormSubmit"
      >
        <q-form-item
          label="Логин"
          prop="username"
        >
          <q-input
            v-model="formModel.username"
            clearable
            placeholder="Введите логин"
            autocomplete="off"
          />
        </q-form-item>

        <q-form-item
          label="Пароль"
          prop="password"
        >
          <q-input
            v-model="formModel.password"
            password-switch
            autocomplete="off"
            placeholder="Введите пароль"
          />
        </q-form-item>

        <q-button
          full-width
          class="signin-page__btn"
          :loading="isLoading"
          native-type="submit"
        >
          Войти
        </q-button>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignInPage',

  setup() {
    // создаем роутер, чтоб управлять маршрутами
    const router = useRouter();

    // поля формы
    const formModel = reactive({
      username: '',
      password: ''
    });

    // правила валидации для полей формы
    const rules = {
      username: {
        required: true,
        trigger: 'blur',
        message: 'Поле обязательно к заполнению'
      },
      password: {
        required: true,
        trigger: 'blur',
        message: 'Поле обязательно к заполнению'
      }
    };

    // ссылка через ref для элемента формы
    const form = ref(null);

    // метка для отображения загрузки кнопки
    const isLoading = ref(false);

    const handleFormSubmit = async () => {
      // проверка валидности формы
      const validationResult = await form.value?.validate();
      // если форма невалидна, возвращаем пустоту (т.е. ничего не делаем)
      if (!validationResult?.isValid) return;

      // переключаем загрузку кнопки на истину
      isLoading.value = true;

      // в реальности тут был бы запрос к серверу, но для имитации его поставим таймер на 2 секунды
      setTimeout(() => {
        router.push('/');
        isLoading.value = false;
      }, 2000);
    }

    return {
      form,
      formModel,
      rules,
      isLoading,
      handleFormSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
	.signin-page {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;

		&__inner {
			width: 264px;
		}

		&__logo {
			margin-bottom: 16px;
			text-align: center;
		}

		&__btn {
			margin-top: 16px;
		}
	}
</style>
