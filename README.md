
# VUE 3 - COMPOSITION API

The goal of this exercise is to use the composition API, in combination with the [Provide / Inject](https://vuejs.org/guide/components/provide-inject.html#provide-inject) feature, which is one of vue 3's novelty.

## SUBJECT

Build a hook-based toast system, using the composition API and the provide / inject vue 3 feature, using the component provider pattern. A component provider pattern is a design pattern that allows you to render components in your app from pure functions, while having a great control over the rendered component. 

You are not expected to alraedy know this feature as it's something new, so take the time to go through the docs to understand how it works, and which use case it covers.

## TECH STACK

- Vue 3 
- Typescript
- TailwindCSS

You are expected to use tailwind only for styling, at the exception of component transitions, that require custom classes to be written.

You are also expected to write proper TS interfaces / types for any state / functions you'll be impmementing.

The project has already been pre-setup, with files predefined for you. Here is the live version of the completed project you can use as a reference :
[COMPLETED PROJECT EXAMPLE](https://vue-composition-api-toast.vercel.app/)

## REQUIREMENTS

- For all components, you must use the [script setup syntax](https://vuejs.org/api/sfc-script-setup.html#script-setup)
- From the "App" component, I should be able to call the `useToast()` hook to get the toast API. 
- The toast API should offer me two features : Create a toast, and destroy all opened toasts
- The function to add a toast should have three parameters : Type (Info, Success, Error), Message (string) & duration.
- All the toasts should be rendered on a scrollable container, on the right side of the screen.
- When rendered / destroyed, the toast should have a transition
- Be careful to type well everything with typescript. Search to properly type provide/inject.
- Depending on the toast type, the color of the toast should change. See the live example for reference
- The method creating the toast should return a ref with the toast parameters (text, type, ...). When updating any value of this ref, the changes should apply to the toast itself 

## ABOUT THE PREDEFINED files

#### SRC/COMPONENTS :
- **AppProvider:** Entry point of the application. 
- **ToastProvider:** Component responsible for controling the rendered toasts
- **App**: Place where you should consume the useToast() hook

#### SRC/COMPOSABLES :
- **useToast**: Hook that allows to create and control toasts

#### SRC/CONSTANTS :
- **injectionKeys.ts:** Place where injection key(s) should be stored & exported. (Beware of typescript implementation here).


<p align="center">
  <img src="https://user-images.githubusercontent.com/55083156/198074749-457e8042-9984-434e-8d73-1313bfd81491.jpeg" alt="provider-diagram" height="600" />
</p>

