# Generated by Django 5.0.4 on 2024-05-05 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0008_remove_espaco_sinal_reserva_reserva_parcela_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='reserva',
            name='avaliacao',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
