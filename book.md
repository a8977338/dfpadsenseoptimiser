---
layout: "book"
title: "Optimizing Google AdSense"
---
## Optimizing Google AdSense

{% for post in site.posts reversed %}
  {% if post.category == 'book' %}
### {{ post.title }}

{{ post.abstract }}

[read more](/dfpadsenseoptimiser{{ post.url }} "{{ post.title }}")

  {% endif %}
{% endfor %}

..
