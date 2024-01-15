# Guía de instalación y de uso de ArchiHUB

## Detalles del aplicativo

El sistema ArchiHUB se compone de dos partes principales: un backend y un frontend. El backend, siendo una API, permite que el frontend sea un componente intercambiable. Actualmente, hay una versión del frontend que ejecuta todas las tareas relacionadas con el procesamiento y la gestión del archivo. No obstante, esta configuración no restringe el uso del sistema, ya que se puede desarrollar una interfaz adaptada a las necesidades específicas de cada usuario, dependiendo de sus requerimientos.

En cuanto al backend, opera utilizando una base de datos MongoDB en conjunto con ElasticSearch para indexar el contenido y realizar búsquedas avanzadas. La API se encuentra desarrollada en Python, utilizando Flask como framework, y emplea un gestor de tareas basado en Celery.

## Instalación con Docker

Para facilitar la instalación de la herramienta, existe un [docker-compose](./docker-compose/README.md) que despliega el sistema en una sola máquina. Sin embargo, es recomendable para entornos colaborativos o de producción hacer el despliegue de la herramienta en varias máquinas. Los detalles de una instalación así se encuentran en las guías de uso.

## Guías de uso